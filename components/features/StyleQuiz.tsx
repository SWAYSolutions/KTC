'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Style Quiz Component
 * AI-powered style recommendation quiz
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, RefreshCw, Sparkles } from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';
import { quizQuestions, calculateStyleResult, type QuizResult } from '@/data/style-quiz';
import { cn } from '@/lib/utils';

interface StyleQuizProps {
  onComplete?: (result: QuizResult) => void;
}

export function StyleQuiz({ onComplete }: StyleQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (answerId: string) => {
    if (isAnimating) return;

    const newAnswers = [...answers, answerId];
    setAnswers(newAnswers);
    setIsAnimating(true);

    // Short delay for animation
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        // Calculate result
        const quizResult = calculateStyleResult(newAnswers);
        setResult(quizResult);
        onComplete?.(quizResult);
      }
      setIsAnimating(false);
    }, 300);
  };

  const handleBack = () => {
    if (currentQuestion > 0 && !isAnimating) {
      setCurrentQuestion((prev) => prev - 1);
      setAnswers((prev) => prev.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  // Result Screen
  if (result) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <Card variant="elevated" padding="lg" className="text-center">
          {/* Result Header */}
          <div className="w-20 h-20 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-gold" />
          </div>

          <Badge variant="gold" className="mb-4">Your Kitchen Style</Badge>

          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
            {result.title}
          </h2>

          <p className="text-charcoal-500 leading-relaxed mb-8 max-w-lg mx-auto">
            {result.description}
          </p>

          {/* Recommendations */}
          <div className="bg-cream rounded-xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-charcoal mb-4">
              We Recommend for You:
            </h3>
            <ul className="space-y-2">
              {result.recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-center gap-2 text-charcoal-600">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  {rec}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="gold" size="lg" className="group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={handleRestart}>
              <RefreshCw className="mr-2 w-5 h-5" />
              Take Quiz Again
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  }

  // Quiz Questions
  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-charcoal-500">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm text-gold font-medium">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-charcoal-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gold rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-8 text-center">
            {question.question}
          </h2>

          {/* Options */}
          <div className="grid sm:grid-cols-2 gap-4">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.id)}
                disabled={isAnimating}
                className={cn(
                  'p-6 rounded-xl border-2 text-left transition-all duration-200',
                  'hover:border-gold hover:shadow-gold hover:bg-gold-50',
                  'focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  'border-charcoal-200 bg-white'
                )}
              >
                {option.image && (
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={option.image}
                      alt={option.text}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <span className="font-medium text-charcoal">{option.text}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentQuestion === 0 || isAnimating}
          className="opacity-70 hover:opacity-100"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>

        <Button variant="ghost" onClick={handleRestart} className="opacity-70 hover:opacity-100">
          <RefreshCw className="mr-2 w-4 h-4" />
          Start Over
        </Button>
      </div>
    </div>
  );
}

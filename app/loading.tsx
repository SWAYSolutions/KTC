/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Loading Component
 * Kitchen-themed loading animation
 * ═══════════════════════════════════════════════════════════════════════════════
 */

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-cream">
      <div className="text-center">
        {/* Kitchen-themed loading spinner */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-charcoal-100 rounded-full" />
          {/* Spinning ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-gold rounded-full animate-spin" />
          {/* Inner ring */}
          <div className="absolute inset-2 border-4 border-transparent border-b-wood rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
        </div>

        {/* Text */}
        <p className="text-charcoal-500 font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

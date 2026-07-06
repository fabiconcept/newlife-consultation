export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* Speedometer-style loader */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36">
          {/* Outer ring */}
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-gray-100"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="80 260"
              className="text-primary"
            />
          </svg>

          {/* Middle ring */}
          <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-spin-reverse" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-100"
            />
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="60 220"
              className="text-secondary"
            />
          </svg>

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          </div>
        </div>

        <div className="text-center">
          <p className="font-body text-sm font-medium text-foreground animate-pulse">
            Loading
            <span className="inline-block w-4 text-left animate-dots">...</span>
          </p>
          <p className="font-body text-xs text-gray-400 mt-1">New Life Consulting</p>
        </div>
      </div>
    </div>
  );
}

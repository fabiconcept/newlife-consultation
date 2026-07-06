"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-danger/10 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-danger"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "system-ui" }}>
            Critical Error
          </h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto" style={{ fontFamily: "system-ui" }}>
            Something went seriously wrong. Please reload the page or try again later.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors cursor-pointer"
              style={{ fontFamily: "system-ui" }}
            >
              Reload Page
            </button>
            <a
              href="/"
              className="px-6 py-3 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
              style={{ fontFamily: "system-ui" }}
            >
              Back to Home
            </a>
          </div>

          {error.digest && (
            <p className="mt-8 text-xs text-gray-400" style={{ fontFamily: "system-ui" }}>
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}

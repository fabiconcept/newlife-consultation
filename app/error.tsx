"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-white">
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

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Something Went Wrong
        </h1>
        <p className="font-body text-gray-500 mb-8 max-w-md mx-auto">
          We hit an unexpected snag. Don&apos;t worry, this isn&apos;t your fault. You can try again or head back home.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="duolingo-btn btn-primary font-body font-semibold px-6 py-3 text-sm sm:text-base cursor-pointer"
          >
            Try Again
          </button>
          <a
            href="/"
            className="duolingo-btn btn-outline font-body font-semibold px-6 py-3 text-sm sm:text-base"
          >
            Back to Home
          </a>
        </div>

        {error.digest && (
          <p className="mt-8 font-body text-xs text-gray-400">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}

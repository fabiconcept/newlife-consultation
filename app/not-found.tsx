import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-white">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="font-display text-[10rem] sm:text-[14rem] font-bold leading-none text-primary/5 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 flex items-center justify-center animate-bounce">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-gray-500 mb-8 max-w-md mx-auto">
          Looks like this page doesn&apos;t exist anymore. Maybe it was moved, or maybe it was never here.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="duolingo-btn btn-primary font-body font-semibold px-6 py-3 text-sm sm:text-base"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="duolingo-btn btn-outline font-body font-semibold px-6 py-3 text-sm sm:text-base"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="font-body text-sm text-gray-400 mb-4">Or try one of these:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: "/services", label: "Services" },
              { href: "/pricing", label: "Pricing" },
              { href: "/about", label: "About" },
              { href: "/booking", label: "Book a Call" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-primary hover:text-primary-dark hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

interface Review {
  text: string;
  name: string;
  role: string;
  initials: string;
  cssVar: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="p-6 sm:p-8 bg-white rounded-2xl border border-gray-200 h-full flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, j) => (
          <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="font-body text-gray-600 mb-6 flex-1">&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: `color-mix(in srgb, var(${review.cssVar}) 15%, transparent)` }}
        >
          <span className="font-body font-semibold text-sm" style={{ color: `var(${review.cssVar})` }}>
            {review.initials}
          </span>
        </div>
        <div>
          <p className="font-body font-semibold text-foreground text-sm">{review.name}</p>
          <p className="font-body text-gray-400 text-xs">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);
  const x = useMotionValue(0);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const total = reviews.length;
  const totalPages = Math.ceil(total / slidesPerView);

  // Responsive slides per view
  useEffect(() => {
    function update() {
      const w = containerRef.current?.offsetWidth || 1024;
      if (w < 640) setSlidesPerView(1);
      else if (w < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    }
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Build pages (each page = one "slide" showing slidesPerView cards)
  const pages: Review[][] = [];
  for (let p = 0; p < totalPages; p++) {
    const page: Review[] = [];
    for (let i = 0; i < slidesPerView; i++) {
      page.push(reviews[(p * slidesPerView + i) % total]);
    }
    pages.push(page);
  }

  // Navigate to a page
  const goToPage = useCallback(
    (page: number, velocity = 0) => {
      const clamped = Math.max(0, Math.min(page, totalPages - 1));
      setCurrent(clamped);
      const w = containerRef.current?.offsetWidth || 1024;
      animate(x, -clamped * w, {
        type: "spring",
        stiffness: 260,
        damping: 30,
        velocity,
      });
    },
    [totalPages, x]
  );

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % totalPages;
        const w = containerRef.current?.offsetWidth || 1024;
        animate(x, -next * w, { type: "spring", stiffness: 260, damping: 30 });
        return next;
      });
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalPages, x]);

  // Drag
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      dragStartX.current = e.clientX;
      x.stop();
      if (timerRef.current) clearInterval(timerRef.current);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [x]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - dragStartX.current;
      const w = containerRef.current?.offsetWidth || 1024;
      const base = -current * w;
      x.set(base + dx * 0.65);
    },
    [current, x]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const dx = e.clientX - dragStartX.current;
      const threshold = 50;

      if (Math.abs(dx) > threshold) {
        if (dx < 0 && current < totalPages - 1) goToPage(current + 1, -dx * 1.5);
        else if (dx > 0 && current > 0) goToPage(current - 1, dx * 1.5);
        else goToPage(current);
      } else {
        goToPage(current);
      }
    },
    [current, totalPages, goToPage]
  );

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        if (isDragging.current) {
          isDragging.current = false;
          goToPage(current);
        }
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ touchAction: "pan-y", cursor: "grab" }}
    >
      <motion.div
        className="flex"
        style={{ x }}
      >
        {pages.map((page, pageIndex) => {
          const isCurrent = pageIndex === current;
          return (
            <div
              key={pageIndex}
              className="shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{
                width: "100%",
                flexShrink: 0,
                opacity: isCurrent ? 1 : 0.3,
                transform: isCurrent ? "scale(1)" : "scale(0.95)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              {page.map((review, i) => (
                <div key={`${review.name}-${pageIndex}-${i}`} className="h-full">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          );
        })}
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === current ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400 w-2.5"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

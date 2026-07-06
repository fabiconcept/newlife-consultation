"use client";

import { useState } from "react";

export default function DevErrorTester() {
  const [open, setOpen] = useState(false);

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9998]">
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-foreground text-white shadow-lg flex items-center justify-center text-xs font-mono font-bold cursor-pointer hover:scale-110 transition-transform"
        title="Dev Error Tester"
      >
        !
      </button>

      {/* Panel */}
      {open && (
        <div className="absolute bottom-14 right-0 bg-foreground text-white rounded-xl shadow-2xl p-4 w-56 animate-scale-in">
          <p className="font-body text-xs font-semibold mb-3 text-gray-300 uppercase tracking-wider">
            Error Tester
          </p>
          <div className="space-y-2">
            <button
              onClick={() => {
                throw new Error("Test error from DevErrorTester");
              }}
              className="w-full text-left px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-body text-sm transition-colors cursor-pointer"
            >
              Trigger Error Boundary
            </button>
            <button
              onClick={() => {
                window.location.href = "/this-page-does-not-exist";
              }}
              className="w-full text-left px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-body text-sm transition-colors cursor-pointer"
            >
              Trigger 404
            </button>
            <button
              onClick={() => {
                window.location.href = "/nonexistent-route";
              }}
              className="w-full text-left px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-body text-sm transition-colors cursor-pointer"
            >
              Trigger Global Error
            </button>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs cursor-pointer"
          >
            x
          </button>
        </div>
      )}
    </div>
  );
}

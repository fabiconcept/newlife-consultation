export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
        <p className="font-body text-sm text-gray-400 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

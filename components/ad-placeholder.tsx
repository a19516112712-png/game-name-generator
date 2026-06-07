export default function AdPlaceholder({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="my-16 rounded-2xl border border-dashed border-gray-700 bg-gray-900/30 p-8 text-center">
      <div className="mx-auto flex max-w-md flex-col items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
          <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
          </svg>
        </div>
        <p className="text-sm text-gray-500">{label}</p>
        <div className="h-[90px] w-full rounded-xl bg-gray-800/50" />
      </div>
    </div>
  );
}

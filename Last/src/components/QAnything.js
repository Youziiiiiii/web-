'use client';

export default function QAnything() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl h-[800px] bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://ai.youdao.com/saas/qanything/#/bots/00277E5943214181/share"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="microphone"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
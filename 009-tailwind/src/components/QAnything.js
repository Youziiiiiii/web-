'use client';

export default function QAnything() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl h-[800px] bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://ai.youdao.com/saas/qanything/#/bots/394F6136319A47A0/share"
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
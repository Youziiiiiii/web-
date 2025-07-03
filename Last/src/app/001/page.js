
export default function Page() {
  
  return (
    <div className="min-h-screen p-4">

      <h1 className="text-2xl font-bold mb-4">html001</h1>
      {/* 嵌入001.html的iframe */}
      <iframe
        src={`/homework/001 .html`}
        width="100%"
        height="800px"
        frameBorder="0"
        title="Homework 001"
        allowFullScreen
      />
    </div>
  );
}
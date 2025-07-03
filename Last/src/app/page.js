import Navbar from "@/components/Navbar";
import ExerciseCard from "@/components/ExerciseCard"; // 导入练习卡片组件
import exercises from "@/data/exercises.json"; // 从 JSON 文件导入练习数据
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100"> {/* Slightly lighter background for better contrast */}
   
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl my-6 overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-full">
    
            <header className="text-center mb-16 py-12 bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/globe.svg')] bg-no-repeat bg-[right_-50px_top_-50px] opacity-20"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
                我的作业
                <span className="ml-2 text-yellow-300 animate-pulse">✦</span>
              </h1>
              <p className="text-xl text-blue-100 relative z-10">
                web前端作业展示
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </header>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exercises.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  title={exercise.title}
                  description={exercise.description}
                  imageUrl={exercise.imageUrl}
                  link1={exercise.link1}
                  link2={exercise.link2}
                  tags={exercise.tags}
                />
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/3 sticky top-4">
            <iframe 
              src="https://ai.youdao.com/saas/qanything/#/bots/00277E5943214181/share"
              className="w-full h-[600px] border rounded-lg shadow-lg sticky top-4"
              title="QAnything AI助手"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        <div className="w-full md:w-1/3 sticky top-4">
            <iframe 
              src="/homework/bot.html"
              className="w-full h-[600px] border rounded-lg shadow-lg sticky top-4"
              title="QAnything AI助手api版本"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </main>
      {/* Footer 组件将在 layout.js 中添加 */}
    </div>
  );
}

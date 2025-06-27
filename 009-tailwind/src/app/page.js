import PracticeCard from '@/components/PracticeCard';

export default function HomePage() {
  const weekOneTitle = "第一周：组件基础";
  const practiceDate = new Date().toLocaleDateString();

  const practices = [
    {
      id: 1,
      title: weekOneTitle,
      description: "学习 React 组件的核心概念和 JSX 基础。",
      date: practiceDate,
      completed: false,
    },
    {
      id: 2,
      title: "第二周：Props 与 State",
      description: "掌握组件间数据传递和内部状态管理。",
      date: practiceDate,
      completed: true,
    },
    {
      id: 3,
      title: "第三周：事件处理与列表渲染",
      description: "让你的组件响应用户交互，并学习如何高效渲染列表数据。",
      date: practiceDate,
      completed: false,
    },
    {
      id: 4,
      title: "第四周：Tailwind CSS 集成",
      description: "使用 Tailwind CSS 快速美化你的 Next.js 应用。",
      date: practiceDate,
      completed: true,
    }
  ];

  return (
    // 使用 Flexbox 居中内容，并添加上下内边距
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8 text-center">
        每周练习进度
      </h1>

      {/* 使用 Grid 布局来排列卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {practices.map((practice) => (
          <PracticeCard
            key={practice.id} // 列表渲染时，key 是必须的
            title={practice.title}
            description={practice.description}
            date={practice.date}
            completed={practice.completed}
          />
        ))}
      </div>
    </div>
  );
}
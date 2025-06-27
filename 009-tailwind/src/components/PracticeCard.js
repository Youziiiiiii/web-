export default function PracticeCard({ title, description, date, completed }) {
  // 根据 completed 状态决定边框和一些文本颜色
  const cardClasses = `
    bg-white
    rounded-lg
    shadow-lg
    p-6
    m-4
    transition-all
    duration-300
    ease-in-out
    hover:shadow-xl
    border-2
    ${completed ? 'border-green-500' : 'border-slate-200'}
  `;

  const titleClasses = `
    text-xl
    font-semibold
    mb-2
    ${completed ? 'text-green-700' : 'text-slate-800'}
  `;

  const statusTextClasses = `
    text-sm
    font-medium
    ${completed ? 'text-green-600' : 'text-orange-500'}
  `;

  return (
    <div className={cardClasses}>
      <h2 className={titleClasses}>{title}</h2>
      <p className="text-slate-600 text-sm mb-3 min-h-[40px]">{description}</p>
      <p className="text-xs text-slate-400 mb-3">日期: {date}</p>
      <p className={statusTextClasses}>
        状态: {completed ? '已完成 ✔' : '未完成 ⏳'}
      </p>
    </div>
  );
}
import './globals.css' // 确保 Tailwind 指令被引入
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '009次作业展示作业平台',
  description: '使用 Next.js 和 Tailwind CSS 构建',
}

// 简单的导航条组件
function Navbar() {
  return (
    <nav className="bg-slate-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold hover:text-slate-300 transition-colors">
          作业平台
        </a>
        <div className="space-x-4">
          <a href="/" className="hover:text-slate-300 transition-colors">首页</a>
          <a href="/archive" className="hover:text-slate-300 transition-colors">归档</a>
          {/* 可以添加更多链接 */}
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-slate-50`}> {/* 给 body 添加一个背景色 */}
        <Navbar /> {/* 添加导航条 */}
        <main> {/* children 会被渲染在这里 */}
          {children}
        </main>
        {/* 你也可以在这里添加 Footer */}
      </body>
    </html>
  )
}
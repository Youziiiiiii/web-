import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          我的应用
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              首页
            </Link>
          </li>
           <li>
            <Link href="/qanything" className="hover:text-gray-300">
             Qanything
            </Link>
          </li>     
          <li>
            <Link href="/bot" className="hover:text-gray-300">
             Qanything的api版本
            </Link>
          </li>     
          <li>
            <Link href="/007" className="hover:text-gray-300">
              GitHub上传记录
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
"use client"; // 标记为客户端组件（Next.js特性）
import React, { useState } from "react"; // 1. 引入React和状态管理钩子useState

/**
 * 练习卡片组件
 * @param {Object} props - 组件属性
 * @param {string} props.title - 练习标题
 * @param {string} props.description - 练习描述
 * @param {string} props.imageUrl - 练习封面图地址
 * @param {string} props.link1 - 第一个链接地址（查看代码）
 * @param {string} props.link2 - 第二个链接地址（打开网页）
 * @param {string[]} props.tags - 练习标签数组
 */
export default function ExerciseCard({ title, description, imageUrl, link1, link2, tags }) {
  // 4. 创建状态：跟踪是否收藏（初始为未收藏）
  const [isFavorited, setIsFavorited] = useState(false);

  // 5. 事件处理函数：切换收藏状态
  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited); // 取反当前收藏状态
  };

  return (
    // 卡片容器：白色背景、圆角、阴影、悬停动画
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* 练习封面图：宽度占满、高度固定、内容覆盖 */}
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={title || "Exercise Image"} // 备用alt文本（标题不存在时显示）
      />

      {/* 卡片内容区域：内边距6单位 */}
      <div className="p-6">
        {/* 练习标题：2xl字号、半粗体、深灰色、底部边距2单位 */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {title || "练习标题"} {/* 备用标题（标题不存在时显示） */}
        </h3>

        {/* 练习描述：中灰色、小字号、底部边距4单位、行高宽松 */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description || "这里是练习的简要描述，介绍练习的主要内容和目标。"} {/* 备用描述 */}
        </p>

        {/* 标签区域：仅当tags数组存在且非空时渲染 */}
        {tags && tags.length > 0 && (
          <div className="mb-4">
            {/* 遍历标签数组渲染标签 */}
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
              >
                {tag} {/* 标签内容 */}
              </span>
            ))}
          </div>
        )}

        {/* 按钮区域：弹性布局、垂直居中、水平两端对齐、顶部边距4单位 */}
        <div className="flex items-center justify-between mt-4">
          {/* 查看代码按钮：仅当link1存在时渲染 */}
          {link1 ? (
            <a
              href={link1}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sky-600 text-white px-6 py-2 rounded-md font-medium
                         transform transition-transform duration-200 hover:scale-105 hover:bg-sky-700
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
            >
              查看代码
            </a>
          ) : (
            <p className="text-sm text-gray-400">未指向链接</p> // link1不存在时提示
          )}

          {/* 打开网页按钮：仅当link2存在时渲染 */}
          {link2 ? (
            <a
              href={link2}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sky-600 text-white px-6 py-2 rounded-md font-medium
                         transform transition-transform duration-200 hover:scale-105 hover:bg-sky-700
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
            >
              打开网页
            </a>
          ) : (
            <p className="text-sm text-gray-400">未指向链接</p> // link2不存在时提示
          )}
        </div>
      </div>
    </div>
  );
}

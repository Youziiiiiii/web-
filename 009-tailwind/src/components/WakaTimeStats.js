'use client';

import { useState, useEffect } from 'react';

export default function WakaTimeStats() {
  const [wakaTimeData, setWakaTimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 重要：请将此 URL 替换为您自己的 Cloudflare Worker URL
  const workerUrl = 'https://my-wakatime-worker.3498727358.workers.dev';

  useEffect(() => {
    const fetchWakaTimeData = async () => {
      try {
        setLoading(true);
        const res = await fetch(workerUrl);
        if (!res.ok) {
          throw new Error('Failed to fetch WakaTime data');
        }
        const data = await res.json();
        setWakaTimeData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWakaTimeData();
  }, []);

  if (loading) return <p className="text-center">WakaTime 数据加载中...</p>;
  if (error) return <p className="text-center text-red-500">WakaTime 错误: {error}</p>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">WakaTime 最近编程活动</h2>
      {wakaTimeData && wakaTimeData.data ? (
        <ul>
          {wakaTimeData.data.languages.slice(0, 5).map(lang => (
            <li key={lang.name} className="flex justify-between items-center py-2 border-b">
              <span className="font-medium">{lang.name}</span>
              <span className="text-gray-600">{lang.text}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>未能加载 WakaTime 数据。</p>
      )}
    </div>
  );
}
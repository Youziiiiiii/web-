"use client";
import { useState, useEffect } from 'react';

export default function WakaTime() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/wakatime');
        const jsonData = await response.json();
        setData(jsonData.data.text);
      } catch (error) {
        console.error('获取数据失败:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 // if (loading) return <div>加载中...</div>;

  return (
    <div>
      <h2>编程总时长</h2>
      <p>{data}</p>
    </div>
  );
}
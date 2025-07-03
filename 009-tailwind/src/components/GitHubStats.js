'use client';

import { useState, useEffect } from 'react';

export default function GitHubStats({ repoName }) {
  const [repoInfo, setRepoInfo] = useState(null);
  const [commits, setCommits] = useState([]);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!repoName) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const [repoRes, commitsRes, contentsRes] = await Promise.all([
          fetch(`https://api.github.com/repos/${repoName}`),
          fetch(`https://api.github.com/repos/${repoName}/commits`),
          fetch(`https://api.github.com/repos/${repoName}/contents`)
        ]);

        if (!repoRes.ok || !commitsRes.ok || !contentsRes.ok) {
          throw new Error('Failed to fetch data from GitHub API');
        }

        const repoData = await repoRes.json();
        const commitsData = await commitsRes.json();
        const contentsData = await contentsRes.json();

        setRepoInfo(repoData);
        setCommits(commitsData);
        setContents(contentsData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 30000); // Refresh every 30 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [repoName]);

  if (loading) return <p className="text-center">加载中...</p>;
  if (error) return <p className="text-center text-red-500">错误: {error}</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">GitHub 仓库统计: {repoInfo?.full_name}</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">基本信息</h2>
        <p>{repoInfo?.description}</p>
        <p><strong>Stars:</strong> {repoInfo?.stargazers_count}</p>
        <p><strong>Forks:</strong> {repoInfo?.forks_count}</p>
        <p><strong>Open Issues:</strong> {repoInfo?.open_issues_count}</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">提交历史</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交时间</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">文件标题</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交次数</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {commits.map((commit, index) => (
                <tr key={commit.sha}>
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(commit.commit.author.date).toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{commit.commit.message}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{commits.length - index}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">仓库内容</h2>
        <ul>
          {contents.map(item => (
            <li key={item.sha} className="flex items-center space-x-2 py-1">
              <span>{item.type === 'dir' ? '📁' : '📄'}</span>
              <a href={item.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
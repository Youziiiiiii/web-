/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // 替换原有的export配置
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
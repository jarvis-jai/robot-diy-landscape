/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Note: i18n 移除 - 改用客戶端語言切換（更簡單的靜態部署）
  
  // 圖片優化
  images: {
    unoptimized: true, // 靜態導出時需要
  },
  
  // 環境變數
  env: {
    NEXT_PUBLIC_SITE_NAME: 'Robotics DIY Onramp',
    NEXT_PUBLIC_ANALYTICS_ID: '', // 待填入 Vercel Analytics ID
  },
};

module.exports = nextConfig;

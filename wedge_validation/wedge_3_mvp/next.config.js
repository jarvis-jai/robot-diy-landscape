/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // i18n 配置
  i18n: {
    locales: ['en', 'zh-TW'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  
  // 輸出靜態站點（適合 Vercel 免費方案）
  // output: 'export',  // 啟用後可純靜態導出
  
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

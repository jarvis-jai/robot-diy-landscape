/**
 * Custom Document
 * 
 * 用於自訂 HTML 結構：
 * - 設定 html lang attribute（根據 locale 切換）
 * - 添加全局 meta tags
 * - 預載字體
 * 
 * 注意：_document.tsx 只在伺服器端渲染
 */

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 預連接到外部資源（提升效能） */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon 和 Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* PWA Manifest（未來擴展） */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* 主題色 */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        
        {/* 作者與版權 */}
        <meta name="author" content="Robot DIY Landscape Project" />
        
        {/* 禁止自動格式化電話號碼 */}
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

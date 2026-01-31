/**
 * Next.js App Component
 * 
 * 全局包裝器，用於：
 * - 導入全局 CSS
 * - 共享 layout
 * - 全局狀態提供者
 */

import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

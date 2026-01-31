# OG Image 設計規格

> 第 30 輪創建 — 2026-01-31

## 📐 設計規格

| 屬性 | 值 |
|------|-----|
| 尺寸 | 1200 × 630 px |
| 格式 | SVG (source) → PNG (production) |
| 語言版本 | EN, zh-TW |
| 檔案位置 | `/public/og-image.svg`, `/public/og-image-zh.svg` |

## 🎨 配色方案

採用 MVP 品牌色系：

### 背景漸層
```css
/* 深藍漸層 - 從左上到右下 */
#0c4a6e → #075985 → #0369a1
```

### 路徑顏色（與 Tailwind 配置一致）
- 🚗 Wheeled: `#10B981` (綠)
- 🦾 Robot Arm: `#8B5CF6` (紫)
- 🚁 Drone: `#F59E0B` (橘)
- 🤔 Unsure: `#6B7280` (灰)

### 強調色漸層
```css
/* 彩虹漸層 - 用於標題和底部線條 */
#10B981 → #0ea5e9 → #8B5CF6 → #F59E0B
```

## 📝 內容結構

### 英文版 (`og-image.svg`)
```
┌────────────────────────────────────────────────────────┐
│  🤖 Free Learning Tool                      [Robot Icon]│
│                                                         │
│  Robotics DIY                                           │
│  Onramp (gradient)                                      │
│                                                         │
│  Find Your Learning Path in 5 Minutes                   │
│  Answer 5 questions → Get personalized recommendations  │
│                                                         │
│  [🚗 Wheeled] [🦾 Robot Arm] [🚁 Drone] [🤔 Unsure]     │
│                                                         │
│                      robotics-onramp.vercel.app         │
└════════════════════════════════════════════════════════┘
  ▀▀▀▀▀▀▀▀▀▀▀ (rainbow gradient accent line) ▀▀▀▀▀▀▀▀▀▀▀
```

### 繁中版 (`og-image-zh.svg`)
```
┌────────────────────────────────────────────────────────┐
│  🤖 免費學習工具                           [Robot Icon]│
│                                                         │
│  機器人 DIY                                             │
│  新手導航 (gradient)                                    │
│                                                         │
│  5 分鐘找到你的學習路徑                                 │
│  回答 5 個問題 → 獲得個人化推薦                         │
│                                                         │
│  [🚗 輪式機器人] [🦾 機械手臂] [🚁 無人機] [🤔 探索中]  │
│                                                         │
│                      robotics-onramp.vercel.app         │
└════════════════════════════════════════════════════════┘
  ▀▀▀▀▀▀▀▀▀▀▀ (rainbow gradient accent line) ▀▀▀▀▀▀▀▀▀▀▀
```

## 🔧 SVG 轉 PNG

### 方法 1：使用 sharp (推薦用於 CI/CD)

```bash
npm install sharp
```

```javascript
// scripts/convert-og-images.mjs
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgFiles = ['og-image.svg', 'og-image-zh.svg'];
const publicDir = './public';

for (const file of svgFiles) {
  const svgPath = path.join(publicDir, file);
  const pngPath = svgPath.replace('.svg', '.png');
  
  await sharp(svgPath)
    .resize(1200, 630)
    .png({ quality: 90 })
    .toFile(pngPath);
  
  console.log(`✅ Converted ${file} → ${file.replace('.svg', '.png')}`);
}
```

### 方法 2：使用 Inkscape CLI

```bash
# 英文版
inkscape public/og-image.svg --export-type=png --export-filename=public/og-image.png

# 繁中版
inkscape public/og-image-zh.svg --export-type=png --export-filename=public/og-image-zh.png
```

### 方法 3：使用線上工具

1. 打開 https://cloudconvert.com/svg-to-png
2. 上傳 SVG 檔案
3. 設定尺寸 1200x630
4. 下載 PNG

### 方法 4：使用 Vercel OG API (動態生成)

未來可整合 `@vercel/og` 實現動態 OG Image 生成：

```typescript
// pages/api/og.tsx
import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'edge',
};
 
export default function handler() {
  return new ImageResponse(
    (
      <div style={{ /* ... */ }}>
        {/* React 元件 */}
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
```

## ✅ 檢查清單

- [x] SVG 設計完成 (EN)
- [x] SVG 設計完成 (zh-TW)
- [x] index.tsx 更新 og:image 路徑
- [x] index.tsx 支援 locale 特定圖片
- [ ] PNG 轉換（待部署時執行）
- [ ] 社交平台測試
  - [ ] Facebook Debugger
  - [ ] Twitter Card Validator
  - [ ] LinkedIn Post Inspector

## 🔗 社交平台驗證工具

| 平台 | 工具 URL |
|------|----------|
| Facebook | https://developers.facebook.com/tools/debug/ |
| Twitter | https://cards-dev.twitter.com/validator |
| LinkedIn | https://www.linkedin.com/post-inspector/ |
| Open Graph | https://www.opengraph.xyz/ |

## 📱 預期效果

分享到社交平台時，用戶會看到：

1. **視覺吸引力**：深藍漸層背景 + 彩虹強調色
2. **品牌識別**：機器人圖標 + 明確的產品名
3. **價值主張**：「5 分鐘找到學習路徑」
4. **行動呼籲**：路徑標籤展示可選項目
5. **語言適配**：根據用戶 locale 顯示對應語言圖片

---

*設計規格由 Round 30 創建。PNG 轉換待部署前完成。*

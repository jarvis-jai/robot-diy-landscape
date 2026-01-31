# 🚀 Vercel 部署指南

本指南說明如何將 Robotics DIY Onramp MVP 部署到 Vercel。

---

## 📋 部署前檢查清單

- [x] `npm run build` 成功 ✅
- [x] 所有 SEO 文件到位（sitemap.xml, robots.txt, manifest.json）✅
- [x] OG Images 準備完成（英文 + 繁中）✅
- [x] 數據文件已內化到 `data/` 目錄（非 symlinks）✅
- [x] i18n 翻譯完整 ✅

---

## 🔧 部署步驟

### 方法 A：Vercel CLI（推薦）

```bash
# 1. 安裝 Vercel CLI（如果尚未安裝）
npm install -g vercel

# 2. 進入 MVP 目錄
cd wedge_validation/wedge_3_mvp

# 3. 登入 Vercel
vercel login

# 4. 部署（首次會創建專案）
vercel

# 5. 部署到 production
vercel --prod
```

### 方法 B：Vercel Dashboard（Web UI）

1. 前往 [vercel.com](https://vercel.com) 並登入
2. 點擊 "Add New" → "Project"
3. 選擇 "Import Git Repository" 或 "Upload" 本地目錄
4. 配置：
   - Framework Preset: **Next.js**
   - Root Directory: `wedge_validation/wedge_3_mvp`
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. 點擊 "Deploy"

---

## ⚙️ 建議配置

### 環境變數（目前無需設置）

MVP 目前不需要任何環境變數。所有數據都是靜態 JSON。

### 自訂域名（可選）

部署後可在 Vercel Dashboard 設置自訂域名：
- Settings → Domains → Add Domain

建議域名格式：
- `robotics-onramp.vercel.app`（默認）
- `onramp.yourdomain.com`（自訂子域名）

---

## 🔍 部署後驗證

1. **訪問主頁**：確認 Hero Section 和語言切換正常
2. **完成問卷**：測試 5 題問卷流程
3. **檢查路徑卡片**：確認步驟詳情顯示正確
4. **測試 SEO**：
   - 使用 [Facebook Debugger](https://developers.facebook.com/tools/debug/) 檢查 OG Tags
   - 使用 [Twitter Card Validator](https://cards-dev.twitter.com/validator) 檢查 Twitter Cards
5. **響應式測試**：在手機/平板尺寸下測試

---

## 📁 目錄結構（已優化為 Vercel 部署）

```
wedge_3_mvp/
├── data/                      # ✅ 靜態數據（已從 symlinks 轉為實體文件）
│   ├── curated_resources.json
│   └── learning_paths.json
├── public/
│   ├── og-image.png          # 英文 OG Image
│   ├── og-image-zh.png       # 繁中 OG Image
│   ├── sitemap.xml
│   ├── robots.txt
│   └── manifest.json
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── i18n/
├── package.json
├── next.config.js
└── tailwind.config.js
```

---

## ⚠️ 已知限制

1. **無後端 API**：MVP 為純靜態站點，無動態數據
2. **無分析追蹤**：未集成 Google Analytics 或類似服務
3. **無用戶反饋機制**：未設置表單或評論功能

這些功能可在驗證 MVP 後逐步添加。

---

## 🐛 常見問題

### Q: Build 失敗，找不到 JSON 文件
**A**: 確保 `data/` 目錄包含實體 JSON 文件（不是 symlinks）。第 31 輪已修復此問題。

### Q: OG Image 預覽不顯示
**A**: 清除社交平台快取，使用 Facebook/Twitter 的調試工具重新抓取。

### Q: 中文顯示異常
**A**: 檢查 `_document.tsx` 中的 `lang` 屬性是否正確設置。

---

*最後更新：2026-01-31（第 31 輪 Vercel 部署準備）*

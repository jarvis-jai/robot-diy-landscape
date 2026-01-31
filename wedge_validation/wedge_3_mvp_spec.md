# Wedge #3 MVP 規格文件 — Robotics DIY Onramp

> 驗證狀態：規格定義中  
> 建立日期：2026-01-31  
> 最後更新：2026-01-31

---

## 📊 需求驗證（基於 Reddit 資料）

### r/AskRobotics 熱門問題（2025-2026 年度 Top）

| 問題 | Upvotes | 留言 | 驗證的痛點 |
|------|---------|------|-----------|
| "How popular is ROS2 actually in the robotics industry?" | 59 | 53 | 不知道該學什麼 |
| "What skills do I need to learn to get into robotics?" | 53 | 34 | 技能路徑困惑 |
| "software engineer...should I get a robotics degree or just start building?" | 52 | 33 | 學習路徑選擇 |
| "Changing to Robotics from Software Engineering" | 47 | — | 職涯轉換導航 |

### r/robotics Wiki 狀態

- **最後更新**：2021-01-29（近 5 年前）
- **狀態**：多處標註 "To Do"，明確承認不完整
- **過時內容**：推薦 LEGO Mindstorms 51515（已停產 2024-12-31）
- **結論**：現有官方資源嚴重過時，驗證 Wedge #3 的市場缺口

---

## 🎯 MVP 目標定位

### 目標使用者（Primary Persona）

**「好奇的轉職者」**
- 有軟體/工程背景，對機器人產生興趣
- 不知道從哪開始、學什麼、買什麼
- 需要結構化的引導，而非純連結清單

**次要使用者**
- 完全新手（高中生、Maker 好奇者）
- 有 Arduino 經驗但想進階的愛好者

### MVP 核心價值主張

> **「5 分鐘內獲得個人化的機器人 DIY 學習路徑」**

---

## 🛠️ MVP 功能規格

### 核心功能 1：路徑推薦器（Path Recommender）

**輸入：5 題問卷**

| # | 問題 | 選項 |
|---|------|------|
| 1 | 你的程式經驗？ | 無 / 基礎（學過 Python）/ 中等（寫過專案）/ 專業 |
| 2 | 你的目標？ | 純興趣 / 學習技能 / 職涯轉換 / 學術研究 |
| 3 | 想做什麼類型的機器人？ | 輪式移動 / 機械臂 / 無人機 / 不確定 |
| 4 | 你的預算範圍？ | <$100 / $100-300 / $300-500 / $500+ |
| 5 | 你偏好的學習方式？ | 影片 / 文字教程 / 實作專案 / 線上課程 |

**輸出：個人化路徑卡片**

```
📍 你的推薦路徑：「輪式機器人入門 → ROS 2」

Step 1️⃣ 基礎硬體（預算：~$80）
- 硬體：Elegoo Smart Car Kit V3.0
- 學習：Arduino 基礎（2 週）

Step 2️⃣ 程式基礎（預算：$0）
- 資源：Paul McWhorter Arduino 系列
- 目標：完成 LED、馬達、感測器控制

Step 3️⃣ 進階平台（預算：~$150）
- 硬體：Raspberry Pi 4 + 相機模組
- 學習：Linux 基礎、Python（2 週）

Step 4️⃣ 框架學習（預算：$0）
- 資源：Articulated Robotics YouTube
- 目標：ROS 2 基礎、在 Gazebo 中模擬

Step 5️⃣ 整合專案
- 目標：讓你的車在 ROS 2 下自主導航
- 資源：Automatic Addison 教程

💬 推薦社群：r/AskRobotics、Open Robotics Discord
```

### 核心功能 2：資源地圖（Resource Map）

**精簡版：30 個 curated 資源**

按類別分組：
- 🎓 學習資源（8）：課程、教程、YouTube 頻道
- 🛒 硬體購買（6）：依地區推薦（北美、歐洲、亞洲）
- 🧰 開發工具（6）：IDE、模擬器、框架
- 💬 社群（5）：Discord、Reddit、論壇
- 📦 入門套件（5）：依預算/類型推薦

每個資源標註：
- ✅ 新手友善度（1-3 星）
- 🌐 語言（英/中/多語言）
- 💰 價格（免費/付費/硬體）
- ⏱️ 最後更新確認日期

### 核心功能 3：社群導航指南

```markdown
## 🧭 社群導航

### Reddit
| 社群 | 成員數 | 新手友善 | 規則注意 |
|------|--------|----------|----------|
| r/AskRobotics | 10K | ⭐⭐⭐ | 專為問答設計 |
| r/robotics | 315K | ⭐⭐ | ⚠️ 禁止初學者問題 |
| r/arduino | 745K | ⭐⭐⭐ | 新手友善 |
| r/ROS | 34K | ⭐⭐ | 偏技術 |

### Discord
- Open Robotics Discord：ROS 官方，回覆快
- Arduino Discord：新手友善，活躍

### 繁體中文
- Arduino.Taipei (Facebook)：4.7 萬成員，但歷史不可搜尋
- MakerPRO：台灣創客媒體
```

---

## 🎨 MVP 技術規格

### 技術選型

| 層級 | 選擇 | 理由 |
|------|------|------|
| 框架 | Next.js 14 | 快速開發、SSR、SEO 友善 |
| 部署 | Vercel | 免費、零配置、自動部署 |
| 樣式 | Tailwind CSS | 快速 UI 開發 |
| 資料 | JSON 靜態檔 | MVP 不需資料庫 |
| 域名 | robotics-onramp.vercel.app | 免費（初期） |

### 頁面結構

```
/
├── index.html          # 首頁 + 路徑推薦器
├── resources/          # 資源地圖
├── communities/        # 社群導航
└── about/              # 關於 + 貢獻指南
```

### 多語言策略（MVP）

- **主語言**：英文（最大受眾）
- **次語言**：繁體中文（驗證語言差異化價值）
- 實現：JSON 翻譯檔 + URL prefix（/zh-TW/）

---

## 📈 成功指標

### 定量指標

| 指標 | 目標 | 量測方式 |
|------|------|----------|
| 首月訪客 | >1,000 | Vercel Analytics |
| 完成路徑推薦的比例 | >60% | 事件追蹤 |
| 繁中流量佔比 | >30% | GA |
| 頁面平均停留 | >2 分鐘 | GA |

### 定性指標

- 收到 ≥5 則「這是我入門機器人 DIY 的第一站」類反饋
- Reddit/Twitter 上出現自然分享
- 被其他資源引用

---

## 📅 MVP 開發時程（預估）

| 週次 | 工作項目 |
|------|----------|
| Week 1 | 路徑推薦器 UI + 硬編碼 4 條路徑 |
| Week 2 | 資源地圖 + 社群導航頁面 |
| Week 3 | 繁中翻譯 + 響應式 UI |
| Week 4 | 部署 + Reddit 發文測試 |

---

## 🔗 與 Landscape 的連結

MVP 內容直接基於本 repo 的 landscape 條目：

- 學習資源 → `landscape/learning.md`
- 硬體購買 → `landscape/commerce.md`
- 開發工具 → `landscape/toolchains.md`
- 社群 → `landscape/communities.md`
- 入門套件 → `landscape/kits.md`

資源地圖將引用 landscape 條目的客觀弱項標註，保持中立性。

---

## 📋 下一步行動

1. [ ] 確認 4 條典型學習路徑（輪式/機械臂/無人機/不確定）
2. [ ] 從 landscape 精選 30 個 curated 資源
3. [ ] 設計問卷 UI 原型（Figma 或直接 code）
4. [ ] 建立 Next.js 專案骨架

---

*文件版本：v0.1 - MVP 規格定義*

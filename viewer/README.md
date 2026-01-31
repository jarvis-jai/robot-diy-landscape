# 🤖 Robot DIY Landscape Dashboard

本地可讀的輕量級 Web UI，用於瀏覽 Robot DIY Landscape 資料。

## 快速開始

### 方法 1：本地伺服器（推薦）

```bash
cd viewer
python3 -m http.server 8000
```

然後打開瀏覽器訪問 http://localhost:8000

### 方法 2：直接開啟

部分瀏覽器可以直接雙擊 `viewer/index.html` 開啟。

> ⚠️ 注意：由於 CORS 限制，使用 `file://` 協議可能無法載入 JSON 資料。建議使用方法 1。

## 功能

- **📂 分類瀏覽**：按 landscape 類別（communities, platforms, hardware 等）瀏覽
- **🔍 全文搜尋**：搜尋條目名稱、類型、語言、內容
- **🏷️ 類型篩選**：按類型（Forum, Discord, Tool, Course 等）篩選
- **📄 文件檢視**：查看 gaps, reports, framework 文件

## 資料更新

當 landscape 內容更新後，執行以下指令重新生成 JSON：

```bash
python3 tools/build_viewer.py
```

## 檔案結構

```
viewer/
├── index.html      # 主頁面
├── app.js          # 應用邏輯（純 JS，無框架）
├── styles.css      # 樣式
├── README.md       # 本檔案
└── data/
    ├── items.json      # 所有條目資料
    └── manifest.json   # 分類統計
```

## 技術說明

- **無外部依賴**：不使用 CDN、不需要 npm install
- **純靜態**：可離線使用
- **輕量**：總大小 < 2MB

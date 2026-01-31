# 🤖 Robot DIY Landscape

這個 repo 是一個**長期增厚的知識庫**，系統性地情蒐「機器人 × AI × DIY × 個人開發者」相關的網站、社群、工具與資源版圖。

## 這個 Repo 在做什麼

1. **盤點生態版圖**：記錄全球（以英文為主、中文為輔）機器人/AI DIY 領域的社群、平台、工具鏈、硬體、課程、創作者等
2. **識別缺口**：從事實中萃取推論，找出市場或社群尚未被滿足的需求
3. **形成切角**：將缺口轉化為可行的產品/服務機會點

## Cron 接力式增厚

本 repo 設計為可被自動化 agent（cron job）**分批、持續增厚**：

- 每次 cron 執行一小段探索任務
- 透過 `WORK_QUEUE.md` 指引每輪該做什麼
- 透過 `data/` 機制確保不重複、不偏科、不空轉

## 防止重複與空轉機制

| 機制 | 檔案 | 用途 |
|------|------|------|
| 已訪問紀錄 | `data/visited_urls.csv` | 避免重複調查同一網站 |
| 待訪問清單 | `data/url_backlog.csv` | 候選 URL 排隊，避免漫無目的 |
| 類別輪替 | `data/focus_rotation.json` | 強制輪替 focus，避免只寫同類 |
| 覆蓋度定義 | `data/coverage_checklist.md` | 定義「完成度」而非「完成」 |

## 條目 Schema（統一格式）

每個 `landscape/*.md` 中的條目都使用以下格式：

```markdown
### [條目名稱]

- **Name**：
- **Type**：Forum / Discord / Reddit / Wiki / Blog / Marketplace / Docs / Tool / Course / Repo hub
- **Primary language**：
- **一句話定位**：
- **強項（≤3）**：
- **弱項/缺口（≤3，可觀察）**：
- **活躍度訊號**：最近更新/貼文頻率/是否仍活躍
- **與我們的關聯（一句話）**：
- **Link(s)**：
```

## 目錄結構

```
robot-diy-landscape/
├── README.md              # 本檔案
├── CONSTITUTION.md        # 本 repo 的憲法規則
├── ROADMAP.md             # 階段目標
├── WORK_QUEUE.md          # cron 每輪任務入口
├── SOURCES.md             # 來源規範
├── data/                  # 防重複/偏科機制
│   ├── visited_urls.csv
│   ├── url_backlog.csv
│   ├── focus_rotation.json
│   └── coverage_checklist.md
├── landscape/             # 生態版圖（事實盤點）
│   ├── index.md
│   ├── communities.md
│   ├── platforms.md
│   ├── toolchains.md
│   ├── hardware.md
│   ├── kits.md
│   ├── learning.md
│   ├── commerce.md
│   ├── creators.md
│   └── chinese_ecosystem.md
├── gaps/                  # 缺口與機會（推論）
│   ├── gaps_hypotheses.md
│   └── opportunity_wedges.md
└── reports/               # 報告模板
    └── nightly_report_template.md
```

## 授權

Public repo，內容以 CC BY 4.0 釋出。

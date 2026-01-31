# 📜 CONSTITUTION.md - 本 Repo 的憲法

本文件定義這個 repo 的**四大不可違反規則**。任何 cron job 或人工編輯都必須遵守。

---

## 規則 1：No Duplicate Work（禁止重複勞動）

> 新增條目前，**必須先查 `data/visited_urls.csv`**

- 若 URL 已存在於 `visited_urls.csv`，**不得重複撰寫同一條目**
- 只允許「補強」：在原條目下新增明確的新資訊（需標註補強日期）
- 補強時須說明：新增了什麼、來源是什麼

### 查詢範例
```bash
grep "hackster.io" data/visited_urls.csv
```

如有結果 → 不可新增，只可補強原條目

---

## 規則 2：Rotation Discipline（輪替紀律）

> 每次探索**必須輪替不同類別**

- 使用 `data/focus_rotation.json` 記錄：
  - `last_focus`：上次聚焦的類別
  - `next_focus_candidates`：下次應優先的類別（list）
  - `focus_history`：歷史紀錄（日期 + focus）
- 每輪 cron 開始時，**先讀取 rotation 狀態**，選擇與上次不同的類別
- 避免連續三次以上寫同一類別

### 類別清單
- communities
- platforms
- toolchains
- hardware
- kits
- learning
- commerce
- creators
- chinese_ecosystem

---

## 規則 3：Evidence-First（事實優先）

> Landscape 是事實盤點，Gaps 是推論

### Landscape 檔案（`landscape/*.md`）
- 只記錄**可觀察的事實**
- 每個條目的「弱項/缺口」必須是可驗證的觀察（例：「沒有中文介面」「最後更新在 2022 年」）

### Gaps 檔案（`gaps/*.md`）
- 明確標記為**「推論」**
- 每條推論必須列出 ≥2 個佐證來源
- 格式範例：
  ```markdown
  ### Gap Hypothesis #1
  - **推論**：目前沒有針對非工程師的 AI 機器人入門平台
  - **佐證 1**：[來源 A] 說明...
  - **佐證 2**：[來源 B] 說明...
  - **信心度**：中
  ```

---

## 規則 4：No Premature Done（禁止過早宣布完成）

> 永遠只說「暫時覆蓋到某程度」，**不可宣稱全域完成**

### 正確說法
- ✅ 「communities.md 已覆蓋 15 個高品質條目，達到 Phase 1 標準」
- ✅ 「中文生態目前覆蓋 8 個資源，尚未達標」
- ✅ 「gaps_hypotheses.md 目前有 6 條，需再補 4 條達到 v1 覆蓋」

### 禁止說法
- ❌ 「社群調查已完成」
- ❌ 「所有平台都盤點完畢」
- ❌ 「缺口分析結束」

### 完成度定義
見 `data/coverage_checklist.md`，達到 checklist 也只叫「覆蓋到 v1」，不是終局完成。

---

## 違反處理

如發現任何 commit 違反上述規則：
1. 在 PR/commit message 中標註 `CONSTITUTION_VIOLATION`
2. 說明違反哪條規則
3. 修正後重新 commit

---

*最後更新：2025-01-30*

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

> **`landscape/` 只能寫可觀察事實；`gaps/` 才能寫推論**

### Landscape 檔案（`landscape/*.md`）—— 純事實區

只記錄**可觀察、可驗證的事實**：

✅ 允許的寫法：
- 「該站最後更新於 2024-12」（可查證）
- 「沒有中文介面」（可觀察）
- 「Discord 成員數 15,000」（可查證）
- 「文件只覆蓋 Python，無 C++ 範例」（可觀察）

❌ 禁止的寫法：
- 「這個平台可能適合新手」（推論）
- 「感覺社群不太活躍」（主觀）
- 「應該是市場領導者」（推論）

### Gaps 檔案（`gaps/*.md`）—— 推論區

- 明確標記為**「推論」**
- **每條 gap hypothesis 必須引用 ≥2 個 landscape 條目作為佐證**
- 佐證格式：`[條目名稱](landscape/xxx.md#條目錨點) - 說明`

### Gap Hypothesis 格式（強制）

```markdown
### Gap Hypothesis #N：[簡短標題]

- **推論**：[完整描述這個缺口]
- **佐證 1**：[Name](landscape/xxx.md) - [該條目中哪個事實支持此推論]
- **佐證 2**：[Name](landscape/yyy.md) - [該條目中哪個事實支持此推論]
- **反證/風險**：[如有發現反面證據]
- **信心度**：高 / 中 / 低
```

### 違反範例

❌ 錯誤：Gap 沒有引用 landscape 條目
```markdown
### Gap Hypothesis #1：缺乏中文資源
- **推論**：中文圈機器人資源不足
- **佐證 1**：我搜尋了一下感覺不多  ← 這不是 landscape 引用
```

✅ 正確：Gap 引用具體 landscape 條目
```markdown
### Gap Hypothesis #1：缺乏中文資源
- **推論**：主流機器人 DIY 平台缺乏中文支援
- **佐證 1**：[Hackster.io](landscape/platforms.md#hackster-io) - 介面僅英文，無中文內容分類
- **佐證 2**：[ROS Wiki](landscape/toolchains.md#ros-wiki) - 中文文件覆蓋率 <10%
- **信心度**：高
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

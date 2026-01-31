# 📋 WORK_QUEUE.md - Cron 任務入口

每輪 cron 執行時，照以下 checklist 進行：

---

## 每輪任務流程

### Step 1：讀取狀態
- [ ] 讀取 `data/focus_rotation.json`，確認上次 focus
- [ ] 讀取 `data/coverage_checklist.md`，確認目前覆蓋度

### Step 2：選擇本輪 focus
- [ ] 從 `next_focus_candidates` 選擇一個**與上次不同**的類別
- [ ] 若所有類別都已在近三輪內 focus 過，選擇覆蓋度最低的類別

### Step 3：探索新來源
- [ ] 從 `data/url_backlog.csv` 抽取 3–5 個該類別的候選 URL
- [ ] 若 backlog 不足，用關鍵字搜尋補充（記錄搜尋來源）
- [ ] 對每個 URL：
  - 先查 `data/visited_urls.csv` 是否已存在
  - 若已存在 → SKIP（或補強）
  - 若不存在 → 調查並新增條目

### Step 4：更新紀錄
- [ ] 新增的 URL 加入 `data/visited_urls.csv`
- [ ] 用過的 backlog 條目更新狀態（done/skipped）
- [ ] 更新 `data/focus_rotation.json`：
  - `last_focus` = 本輪 focus
  - `focus_history` 加入本輪紀錄
  - 更新 `next_focus_candidates`

### Step 5：更新覆蓋度
- [ ] 計算該類別目前條目數
- [ ] 更新 `data/coverage_checklist.md` 的狀態

### Step 6：判斷本輪成果
- 若新增 ≥1 個高品質條目 → ✅ 成功
- 若探索了但無符合品質的新條目 → ⏭️ SKIP（這是成功，不是失敗）
- 若完全沒探索就結束 → ❌ 需檢討

---

## SKIP 是成功

**重要**：如果本輪探索後發現：
- 候選 URL 都已在 visited 中
- 候選 URL 品質不足（死站、內容稀薄、不相關）
- 該類別暫時沒有新發現

則記錄「SKIP」並說明原因，這**不是失敗**。空轉比假裝有進度更誠實。

---

## Commit 格式

每輪 commit 使用以下格式：

```
[focus] {category}: {brief description}

- Added: {n} new entries
- Updated: {n} existing entries  
- Skipped: {reason if applicable}
- Coverage: {category} now at {x}/{target}
```

範例：
```
[focus] communities: added 3 Discord servers for robotics hobbyists

- Added: 3 new entries (RoboticsHub, BuildBots, MakerDroids)
- Updated: 0
- Skipped: 2 URLs (dead links)
- Coverage: communities now at 8/15
```

---

## 緊急停止條件

若發現以下情況，暫停 cron 並通知：
1. 連續 3 輪 SKIP 同一類別
2. `visited_urls.csv` 出現重複條目
3. 任何 CONSTITUTION 違反

---

*最後更新：2025-01-30*

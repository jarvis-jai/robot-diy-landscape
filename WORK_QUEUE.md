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
- [ ] 若 backlog 不足，用關鍵字搜尋補充（見下方「Backlog 補充規則」）
- [ ] 對每個 URL：
  - 先查 `data/visited_urls.csv` 是否已存在
  - 若已存在 → SKIP（或補強，需符合補強門檻）
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

### Step 6：判斷 ALLOW vs SKIP

本輪是否達到 **內容門檻**？（見 `COMMIT_POLICY.md`）

#### ✅ ALLOW（可以 commit）
符合以下任一條件：
- 新增 ≥8 個符合 schema 的新條目
- 新增 ≥2 條有佐證的 gap hypothesis（每條 ≥2 個 landscape 條目引用）
- 新增/重構分類結構（使地圖更清晰，需說明改動理由）
- 明確補強 ≥3 個既有條目（每個需新增可驗證資訊）

#### ⏭️ SKIP（不 commit）
- 未達上述任一門檻
- **SKIP 時不得改動 working tree**（git checkout 回復所有變更）
- 記錄 SKIP 原因到本輪日誌（不 commit）

### Step 7：產出與收尾

#### 若 ALLOW：
- [ ] 執行 commit（格式見下方）
- [ ] Push 到遠端
- [ ] **每 3 輪或有重大發現時**，更新 `reports/` 下的 nightly report
  - 不需每輪都寫 report，避免 overhead
  - 重大發現 = 新的 gap hypothesis / wedge / 覆蓋度跨越門檻

#### 若 SKIP：
- [ ] `git checkout .` 清除所有未 commit 的變更
- [ ] 記錄 SKIP 原因（可寫在下次執行時參考，但不 commit）
- [ ] 考慮下輪換 focus 或換 query 策略

---

## Backlog 補充規則

當 backlog 不足時，需用關鍵字搜尋補充。**但必須避免重複搜尋**：

### 搜尋前檢查 `data/search_log.csv`
```bash
grep "robotics discord" data/search_log.csv
```

### 規則
1. **同 query 在 24 小時內做過** → 必須換 query
2. 換 query 策略：
   - 加地區詞：`robotics discord taiwan`、`robotics forum japan`
   - 加技術詞：`ROS2 community`、`Jetson projects`、`humanoid robot diy`
   - 加類型詞：`home robot open-source`、`robot arm kit beginner`
   - 換引擎：Google → DuckDuckGo → Reddit search → GitHub search

### 搜尋後記錄
每次搜尋都要更新 `data/search_log.csv`：
- query, engine, date, top_results_hash, notes

---

## 常見失敗模式處理

### 模式 1：Backlog 枯竭
**症狀**：`url_backlog.csv` 該類別候選不足 3 個

**處理**：
1. 檢查 `search_log.csv`，找出尚未嘗試的 query 組合
2. 嘗試不同搜尋引擎
3. 從已知高品質來源的外連挖掘（link discovery）
4. 若仍無法補充 → 換 focus 類別，本類別標記「暫時飽和」

### 模式 2：遇到重複網站
**症狀**：探索的 URL 都已在 `visited_urls.csv`

**處理**：
1. 確認是否有補強空間（原條目資訊過時或不完整）
2. 若無補強空間 → 標記為 SKIP，不重複寫
3. 更新 backlog 狀態為 `done` 或 `skipped`
4. 從 backlog 抽下一批，或換 query 補充

### 模式 3：卡在同類別
**症狀**：`focus_rotation.json` 顯示連續 2+ 輪同類別

**處理**：
1. 強制換到覆蓋度最低的其他類別
2. 若所有類別都接近飽和 → 轉向 gaps 階段（從事實萃取推論）
3. 在 rotation 中標記「forced switch」

### 模式 4：搜尋結果重複
**症狀**：每次搜尋都找到同一批網站

**處理**：
1. 檢查 `search_log.csv`，確認是否 query 重複
2. 使用 query 變形策略（見上方）
3. 嘗試非搜尋管道：Reddit 討論串、Hacker News、Awesome Lists
4. 記錄「query exhausted」，轉向其他類別

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
4. 連續 5 輪全部 SKIP（跨類別）

---

*最後更新：2025-01-30*

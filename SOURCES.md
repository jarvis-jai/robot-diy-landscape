# 📚 SOURCES.md - 來源規範

本文件規定如何記錄與評估資訊來源。

---

## 語言優先序

1. **英文主線**：全球性資源、主流社群、標準工具
2. **中文副線**：台灣/中國/港澳特有生態、中文創作者、在地社群

目標比例（Phase 1）：
- 英文資源 ≥30 個
- 中文資源 ≥10 個

---

## 來源記錄原則

### 禁止：只貼連結不摘要

❌ 錯誤範例：
```markdown
- https://www.hackster.io/
```

### 必須：每個來源回答三個問題

✅ 正確範例：
```markdown
### Hackster.io

- **這站是什麼**：硬體專案分享平台，專注 IoT、機器人、嵌入式系統
- **為何重要**：全球最大的 DIY 硬體專案社群之一，有完整的教學、開源專案、社群互動
- **缺什麼**：中文內容極少，對非英語使用者門檻較高；商業化路徑不明顯
- **Link**：https://www.hackster.io/
```

---

## 來源類型定義

| Type | 說明 | 範例 |
|------|------|------|
| Forum | 討論區、BBS 形式 | Reddit, Discourse |
| Discord | Discord 伺服器 | Robotics Discord |
| Reddit | Reddit subreddit | r/robotics |
| Wiki | 維基形式知識庫 | ROS Wiki |
| Blog | 個人或團隊部落格 | Hackaday Blog |
| Marketplace | 買賣平台 | Tindie, AliExpress |
| Docs | 官方文件 | Arduino Docs |
| Tool | 軟體工具 | ROS, OpenCV |
| Course | 線上課程 | Coursera Robotics |
| Repo hub | 程式碼集散地 | GitHub Topics |

---

## 品質判斷標準

### 高品質來源
- 持續更新（最近 6 個月內有活動）
- 有實質內容（不只是連結農場）
- 社群活躍（有討論、有回覆）
- 原創內容或有價值的聚合

### 低品質來源（可記錄但標註）
- 超過 1 年未更新
- 內容稀薄或大量重複
- 明顯 SEO spam
- 付費牆阻擋大部分內容

### 死站（記錄為 dead）
- 404 / 無法存取
- 網域已過期
- 明確宣布關閉

---

## 發現新來源的管道

1. **搜尋引擎**：Google, DuckDuckGo（記錄搜尋關鍵字）
2. **社群推薦**：Reddit 討論串、Hacker News、Twitter/X
3. **連結追蹤**：從已知高品質來源的外連發現
4. **聚合站**：Awesome Lists, GitHub Topics
5. **中文管道**：PTT、巴哈、bilibili、知乎、小紅書

---

*最後更新：2025-01-30*

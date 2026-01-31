# 🎯 Raijax.com Wedge Candidates - 定位切口候選

> 為 Raijax.com 萃取的可行切入點，每個 wedge 引用 ≥5 個 landscape 條目佐證

**產出日期**：2026-01-31
**資料來源**：robot-diy-landscape repo（gaps_hypotheses.md + opportunity_wedges.md + landscape/）

---

## 候選總覽

| # | Wedge 名稱 | 主要 Gaps | 目標市場 | 商業潛力 | 執行難度 |
|---|-----------|----------|----------|----------|----------|
| W1 | 繁中機器人進階教程平台 | #1, #4, #7 | 台港澳中文圈 | 中高 | 中高 |
| W2 | 機器人 DIY 入門導航 | #10, #2, #7 | 全球 + 繁中 | 中 | 中 |
| W3 | Sim-to-Real 實戰指南 | #9, #5, #3 | 全球（英文優先）| 中 | 中低 |
| W4 | 開源機器人專案選型指南 | #6, #2 | 全球 DIY 社群 | 低→中 | 低 |

---

## Wedge W1：繁中機器人進階教程平台

### 痛點
- **使用者群體**：台灣/港澳偏好繁體中文的機器人 DIY 愛好者，已有 Arduino/ESP32 基礎，想進階到 ROS 2、SLAM、運動規劃
- **問題**：繁中機器人資源嚴重不足，進階教程（ROS 2、MoveIt、導航系統）幾乎全為英文；簡體中文資源集中在入門級別

### 佐證（Landscape 條目引用）

| # | 條目名稱 | 來源 | 佐證內容 |
|---|----------|------|---------|
| 1 | **ROS 2 Documentation** | [learning.md](../landscape/learning.md#ros-2-documentation) | 「無中文介面或官方中文翻譯」、「學習曲線較 ROS 1 陡峭」 |
| 2 | **太極創客** | [chinese_ecosystem.md](../landscape/chinese_ecosystem.md#太極創客) | 中文圈最完整入門平台，但「偏向入門級別，缺乏進階機器人項目（如 ROS）」 |
| 3 | **micro-ROS** | [toolchains.md](../landscape/toolchains.md#micro-ros) | 將 ROS 2 帶到微控制器的關鍵技術，但「中文資源極少」 |
| 4 | **MoveIt** | [toolchains.md](../landscape/toolchains.md#moveit) | 機器人運動規劃事實標準，「文件以研究人員為主要對象」，無中文版 |
| 5 | **Arduino.Taipei** | [chinese_ecosystem.md](../landscape/chinese_ecosystem.md#arduinotaipei) | 台灣最大 Arduino 社群（4.7 萬成員），但「Facebook 平台限制，歷史帖文不易搜尋」、「無獨立論壇或網站」 |
| 6 | **MakerPRO** | [chinese_ecosystem.md](../landscape/chinese_ecosystem.md#makerpro) | 台灣創客媒體，但「近年更新頻率下降」、「實作教程深度有限」 |

### 缺口分析
- **系統化**：繁中資源偏向新聞報導（MakerPRO、vMaker），非結構化課程
- **進階覆蓋**：從 Arduino 到 ROS 2 的銜接教程在中文圈極度稀缺
- **平台限制**：Arduino.Taipei 依賴 Facebook，內容不可積累、不可搜尋
- **可發現性**：繁中創作者（如夜市小霸王）訂閱數少，SEO 弱

### 切角
- **內容三位一體**：文字教程 + 影片演示 + 實作專案
- **語言策略**：繁體中文為主，同步提供簡體版本擴大受眾
- **差異化**：專注「Arduino/ESP32 → micro-ROS → ROS 2 → 實體機器人」的完整階梯

### 驗證方式
- **MVP**：5 集系列「從 ESP32 到 micro-ROS：讓你的機器人說 ROS 2 語言」
- **成功指標**：
  - 30 天內 YouTube 觀看 > 5,000
  - GitHub 專案星數 > 100
  - ≥10 則「第一個繁中 micro-ROS 教程」類留言

### 相關 Gaps
- [Gap #1](../gaps/gaps_hypotheses.md#gap-hypothesis-1)：中文圈缺乏進階機器人系統級教程
- [Gap #4](../gaps/gaps_hypotheses.md#gap-hypothesis-4)：繁體中文機器人 DIY 資源嚴重不足
- [Gap #7](../gaps/gaps_hypotheses.md#gap-hypothesis-7)：創作者生態的語言/地區嚴重不平衡

### 狀態
**構想中** — 待驗證繁中市場規模與付費意願

---

## Wedge W2：機器人 DIY 入門導航（Robotics DIY Onramp）

### 痛點
- **使用者群體**：剛對機器人 DIY 產生興趣的完全新手（高中生、轉職者、Maker 好奇者）
- **問題**：不知從哪開始、去哪問問題、買什麼硬體、學什麼技能——社群碎片化導致高放棄率

### 佐證（Landscape 條目引用）

| # | 條目名稱 | 來源 | 佐證內容 |
|---|----------|------|---------|
| 1 | **r/robotics** | [communities.md](../landscape/communities.md#rrobotics) | Reddit 最大機器人社群（315K 成員），但「禁止初學者問題，需轉至 r/AskRobotics」 |
| 2 | **r/AskRobotics** | [communities.md](../landscape/communities.md#raskrobotics) | 專門問答社群，但「成員數較少（10K），回覆速度可能較慢」 |
| 3 | **Arduino.Taipei** | [chinese_ecosystem.md](../landscape/chinese_ecosystem.md#arduinotaipei) | 「Facebook 平台限制，歷史帖文不易搜尋」、「無獨立論壇或網站」 |
| 4 | **Makeblock mBot** | [kits.md](../landscape/kits.md#makeblock-mbot) | 入門標竿「15 分鐘快速組裝」，但「基本套件功能有限，需額外購買擴充模組」 |
| 5 | **TurtleBot 4** | [kits.md](../landscape/kits.md#turtlebot-4) | ROS 官方學習平台，但「需要 ROS 基礎知識，學習曲線陡峭」、「主要面向機構和研究人員」 |
| 6 | **Elegoo Uno Smart Robot Car Kit** | [kits.md](../landscape/kits.md#elegoo-uno-smart-robot-car-kit-v30) | 高性價比（~$70），但「組裝說明不夠清晰，需要一定動手能力」 |

### 缺口分析
- **導航缺失**：沒有「先學 A、再學 B、然後 C」的路徑指引
- **選擇疲勞**：「Arduino 還是 ESP32？」「買哪個套件？」——決策成本過高
- **社群入口**：新手不知道 r/robotics 禁止初學者問題
- **多語言盲區**：中文新手搜尋結果被英文主導

### 切角
- **產品形式**：互動式導航網站「Raijax Onramp」
- **核心功能**：
  1. **路徑推薦器**：5 題問卷 → 個人化學習路徑
  2. **資源地圖**：視覺化「機器人 DIY 宇宙」
  3. **新手友善社群指南**：標註哪些社群歡迎新手
  4. **購買建議器**：根據地區和預算推薦硬體
- **差異化**：互動式、多語言（EN + 繁中）、中立（不推銷特定產品）

### 驗證方式
- **MVP**：單頁互動 app（Next.js）
  - 5 題路徑推薦器
  - 30 個 curated 資源
  - 繁中版本優先
- **成功指標**：
  - 首月訪客 > 1,000
  - 完成路徑推薦比例 > 60%
  - 繁中流量 > 30%

### 相關 Gaps
- [Gap #10](../gaps/gaps_hypotheses.md#gap-hypothesis-10)：社群碎片化導致新手導航困難
- [Gap #2](../gaps/gaps_hypotheses.md#gap-hypothesis-2)：從入門套件到進階專案的過渡鴻溝
- [Gap #7](../gaps/gaps_hypotheses.md#gap-hypothesis-7)：創作者生態的語言/地區嚴重不平衡

### 狀態
**構想中** — 已有 wedge_validation/ 資料準備（curated_resources.json、learning_paths.json）

---

## Wedge W3：Sim-to-Real 實戰指南

### 痛點
- **使用者群體**：在 Gazebo/Webots/Isaac Sim 完成專案的 DIY 愛好者，想部署到實體機器人
- **問題**：模擬器中完美的程式碼到實機就崩潰——感測器噪音、機械公差、延遲、電源問題沒有系統化教程

### 佐證（Landscape 條目引用）

| # | 條目名稱 | 來源 | 佐證內容 |
|---|----------|------|---------|
| 1 | **Gazebo** | [toolchains.md](../landscape/toolchains.md#gazebo) | 成熟模擬平台「Jetty LTS 2025-2030」，但未提及 sim-to-real 教程 |
| 2 | **SLAMTEC RPLIDAR** | [hardware.md](../landscape/hardware.md#slamtec-rplidar) | DIY 機器人 LiDAR 標準選擇，「完整 SDK 支援 ROS/ROS2」，但實際整合教程分散 |
| 3 | **Intel RealSense D400** | [hardware.md](../landscape/hardware.md#intel-realsense-d400-series) | 主流深度相機，但「LiDAR 和 Tracking 產品線已於 2024 年 5 月停產」——生態變動中 |
| 4 | **Isaac Lab** | [toolchains.md](../landscape/toolchains.md#isaac-lab) | GPU 加速模擬，30+ 現成環境，但「需高端 GPU」、「學習曲線陡」 |
| 5 | **LeRobot** | [toolchains.md](../landscape/toolchains.md#lerobot) | 端到端 sim-to-real 框架，支援多種硬體，有中文教程（同濟子豪兄） |
| 6 | **Hiwonder IM10A IMU** | [hardware.md](../landscape/hardware.md#hiwonder-im10a-imu-module) | 專為 ROS 設計的 IMU，但「文檔主要透過 Google Drive 分享，不夠系統化」 |

### 缺口分析
- **系統化**：沒有「從模擬到實機」的完整 checklist 和流程指南
- **問題導向**：現有教程教「如何用模擬器」，不教「為什麼實機會失敗」
- **硬體無關**：多數教程假設特定硬體（如 TurtleBot）
- **常見陷阱**：感測器校準、座標轉換、控制頻率、通訊延遲——解法分散各處

### 切角
- **內容定位**：「問題導向」而非「工具導向」——教「實機部署會遇到什麼坑」
- **硬體無關**：適用於自製機器人
- **格式**：
  - 「Sim-to-Real Checklist」——可列印部署前檢查清單
  - 「常見陷阱與解法」系列
  - 「Real-World Debug Guide」——診斷流程
- **差異化**：專注「失敗模式」而非「成功路徑」

### 驗證方式
- **MVP**：
  - 「Sim-to-Real Checklist v1.0」（Markdown 格式）
  - 3 篇配套文章：LiDAR 校準 / 控制頻率調整 / 電源與散熱
- **成功指標**：
  - GitHub Checklist repo 星數 > 200
  - Reddit/HN > 50 upvotes
  - 被 Automatic Addison 或 Articulated Robotics 引用

### 相關 Gaps
- [Gap #9](../gaps/gaps_hypotheses.md#gap-hypothesis-9)：模擬環境到實機部署的系統化過渡教程缺乏
- [Gap #5](../gaps/gaps_hypotheses.md#gap-hypothesis-5)：感測器與 ROS 2 整合的完整教程缺乏
- [Gap #3](../gaps/gaps_hypotheses.md#gap-hypothesis-3)：AI 視覺與機器人整合的系統化教程稀缺

### 狀態
**構想中** — 已有 wedge_validation/wedge_2_sim_to_real_checklist_v1.md 初版

---

## Wedge W4：開源機器人專案選型指南

### 痛點
- **使用者群體**：想 DIY 機器人手臂的愛好者，需要選擇可靠的開源專案
- **問題**：開源專案可維護性參差不齊——個人維護者專案停滯、無商業支援、新進者難以判斷哪些可用

### 佐證（Landscape 條目引用）

| # | 條目名稱 | 來源 | 佐證內容 |
|---|----------|------|---------|
| 1 | **BCN3D Moveo** | [hardware.md](../landscape/hardware.md#bcn3d-moveo) | 經典開源手臂，但「2016 年發布後無重大更新」、「GitHub 最後更新 2018 年」、「無商業支援」 |
| 2 | **ARCTOS Robotics** | [hardware.md](../landscape/hardware.md#arctos-robotics) | 現代替代方案，但「需要 200×200mm 以上的 3D 列印機」、「精度受限於 3D 列印結構」 |
| 3 | **Thor Robot Arm** | [hardware.md](../landscape/hardware.md#thor-robot-arm) | 活躍維護的成功案例——GitHub 1.4K+ stars，v2.1 於 2023-09 發布，有獨立網站和 Discord |
| 4 | **SO-ARM100/SO-101** | [hardware.md](../landscape/hardware.md#so-arm100so-101) | 與 Hugging Face LeRobot 整合，有多家全球供應商（Seeed Studio、淘寶） |
| 5 | **Chris Annin - AR4** | [creators.md](../landscape/creators.md#chris-annin-anninrobotics) | 高品質開源專案，但依賴個人維護者，「頻道訂閱數相對較少（37.3K）」 |
| 6 | **Petoi Bittle** | [kits.md](../landscape/kits.md#petoi-bittle) | 開源四足，但「價格較高（$269 起）」、「組裝和調校需要一定技術基礎」 |

### 缺口分析
- **評估困難**：新手難以判斷專案的活躍度、可複製性、維護狀態
- **資訊分散**：需逐一檢查 GitHub、論壇、Discord 才能評估
- **可持續性風險**：個人維護專案可能隨時停更
- **隱藏成本**：BOM 成本、3D 列印要求、工具需求——常被低估

### 切角
- **產品形式**：「開源機器人專案評鑑」——結構化比較 + 活躍度追蹤
- **核心功能**：
  1. **專案卡片**：標準化資訊（活躍度、BOM 成本、技術門檻、維護狀態）
  2. **活躍度監控**：自動追蹤 GitHub commits、Discord 活躍度
  3. **社群驗證**：收集使用者回報（成功複製、遇到問題）
  4. **選型推薦器**：根據預算、技術能力、目標推薦專案
- **差異化**：專注「可複製性」和「可維護性」，不只是功能比較

### 驗證方式
- **MVP**：10 個機器人手臂專案的結構化比較表（Notion 或 GitHub Pages）
- **成功指標**：
  - 被 r/robotics 或 Hackaday 引用
  - 收到 ≥5 則「這幫我選到專案」類反饋
  - GitHub stars > 50

### 相關 Gaps
- [Gap #6](../gaps/gaps_hypotheses.md#gap-hypothesis-6)：開源機器人手臂專案的長期可維護性挑戰
- [Gap #2](../gaps/gaps_hypotheses.md#gap-hypothesis-2)：從入門套件到進階開源專案的過渡鴻溝

### 狀態
**構想中** — 待評估是否與 W2（導航入口）整合

---

## 綜合分析

### Wedge 優先排序

| 優先級 | Wedge | 理由 |
|--------|-------|------|
| ⭐⭐⭐⭐⭐ | **W2 入門導航** | 最廣泛影響面、最低持續成本、可作為其他 Wedge 入口 |
| ⭐⭐⭐⭐ | **W3 Sim-to-Real** | 全球市場、可模組化推進、內容壁壘高 |
| ⭐⭐⭐ | **W1 繁中進階教程** | 市場較小但競爭少、需持續投入 |
| ⭐⭐ | **W4 專案選型指南** | 低門檻啟動、但商業化路徑不明確 |

### 建議執行策略

**Phase 1（0-4 週）**：同時啟動 W2 和 W3
- W2：MVP 網站（路徑推薦器 + 資源地圖）
- W3：Sim-to-Real Checklist v1.0 + 3 篇文章

**Phase 2（4-8 週）**：根據數據決定
- W2 繁中流量 > 30% → 啟動 W1 繁中教程
- W3 GitHub stars > 100 → 擴展 Checklist 為系列

**Phase 3（8+ 週）**：整合與深化
- 將 W4 專案選型整合進 W2 導航入口
- W1 + W3 形成「入門 → 進階 → 實戰」完整路徑

### Raijax 品牌定位建議

基於四個 Wedge 的共同主題，Raijax.com 可定位為：

> **「機器人 DIY 的中文導航員」**
> 
> - 幫助新手找到入口（W2）
> - 提供進階中文教程（W1）
> - 解決實戰痛點（W3）
> - 評估開源專案（W4）

這個定位：
1. 填補繁中市場空白（Gap #4, #7）
2. 解決社群碎片化（Gap #10）
3. 建立從入門到進階的完整路徑（Gap #2）
4. 可持續擴展至英文市場

---

*Wedge 候選數：4*
*最後更新：2026-01-31*

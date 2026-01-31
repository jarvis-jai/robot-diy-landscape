# ✅ Coverage Checklist - 覆蓋度定義

> ⚠️ 達到此 checklist 稱為「覆蓋到 v1」，**不是終局完成**

---

## Landscape 類別覆蓋

| 類別 | 目標 | 目前 | 狀態 |
|------|------|------|------|
| communities.md | ≥15 | 33 | ✅ |
| platforms.md | ≥15 | 32 | ✅ |
| toolchains.md | ≥10 | 63 | ✅ |
| hardware.md | ≥15 | 50 | ✅ |
| kits.md | ≥10 | 34 | ✅ |
| learning.md | ≥15 | 51 | ✅ |
| commerce.md | ≥10 | 32 | ✅ |
| creators.md | ≥10 | 39 | ✅ |
| chinese_ecosystem.md | ≥10 | 44 | ✅ |

狀態圖例：
- ⬜ 未開始
- 🟡 進行中（>0 但未達標）
- ✅ 達標

---

## 語言分佈

- [x] 英文資源 ≥30 個
- [x] 中文資源 ≥10 個

目前：英文 116 / 中文 19 / 日語 4 / 西班牙語 5 / 德語 1 / 法語 4 / 多語 1 / 繁中 9

---

## Gaps 與 Wedges

- [x] gaps_hypotheses.md：至少 10 條假說 → **✅ 目前 10 條（100%）**
- [x] 每條假說 ≥2 個佐證來源 → **✅ 全部達標（每條 3-4 個佐證）**
- [x] opportunity_wedges.md：至少 3 個 wedge 提案 → **✅ 目前 3 個（100%）**

目前：假說 10 條 ✅ / wedge 3 個 ✅

---

## 品質標準

- [x] 每個條目完整填寫 schema（所有欄位）
- [x] 活躍度訊號有據可查
- [x] 無重複條目（visited_urls.csv 無 duplicate）

---

## v1 覆蓋完成條件

以上所有 checkbox 都打勾 = **覆蓋到 v1** ✅

**🎉 v1 達標里程碑 — 2026-01-31 23:44**

**覆蓋到 v1 的意義**：
- 對這個領域有基本的版圖認知
- 可以開始進行更深入的分析
- 可以開始驗證 wedge 假說

**覆蓋到 v1 不代表**：
- 調查結束
- 不需要再更新
- 版圖已經完整

---

## v1 完成後的建議方向

1. **Wedge 驗證**：按優先級執行 opportunity_wedges.md 中的 MVP 驗證計畫
2. **條目補強**：更新過時資訊、補充弱項觀察
3. **Gap 深化**：將中信心度的 gaps 提升為高信心度（補充更多佐證）
4. **新類別探索**：如有需要，可新增子類別或交叉分類

---

*最後更新：2026-01-31 （第 63 輪 toolchains — 新增 8 個工具鏈條目：dora-rs（Rust 中介軟體，比 ROS2 快 10-17x）、Genesis（43M FPS 物理引擎，多語言文檔）、ROBOTIS Physical AI Tools（LeRobot+ROS2 整合）、gz_ros2_control（Gazebo+ros2_control 橋接）、CLOiSim（LG Unity 多機器人模擬）、ros2_controllers（官方控制器庫）、aruco_ros（ArUco 標記追蹤）、RSL-RL（ETH/NVIDIA RL 庫）。toolchains 達 63 條目。）*

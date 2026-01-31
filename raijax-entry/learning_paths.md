# 🛤️ Learning Paths - 學習路線

> 使用現有 landscape 資源組成的典型學習路徑。不新增任何外部資源。

---

## 路線總覽

| # | 路線名稱 | 適合誰 | 起點 | 終點 | 預估時間 |
|---|---------|--------|------|------|---------|
| A | Maker 起步 | 零基礎新手 | 無 | 能做簡單機器人 | 2-4 週 |
| B | 軟體轉硬體 | 會寫程式的軟體開發者 | Python 基礎 | 能整合 AI + 硬體 | 3-6 週 |
| C | ROS 進階 | 已接觸 ROS 的人 | ROS 基礎 | 完整自主機器人 | 2-3 月 |
| D | 學術專案 | 學生 / 研究者 | 依專案而定 | 可複製的專案成果 | 依專案 |
| E | 探索 | 還不確定要做什麼 | 好奇心 | 找到方向 | 1-2 週 |

---

## 路線 A：Maker 起步

### 適合誰
- 從沒做過電子或程式專案
- 有 DIY 興趣但不知從何開始
- 預算 $50-150 USD

### 起點
無任何基礎

### 學習路徑

```
Week 1-2：認識硬體
    │
    ├─→ 學習資源：Arduino 官方教程
    │   [landscape/learning.md#arduino-project-hub]
    │
    └─→ 購買建議：Arduino Starter Kit ($80-100)
        [landscape/kits.md#arduino-starter-kit]

Week 2-3：第一個機器人
    │
    ├─→ 選項 A：輪式機器人
    │   Elegoo Smart Robot Car ($70)
    │   [landscape/kits.md#elegoo-smart-robot-car]
    │
    └─→ 選項 B：四足機器人
        SunFounder PiSloth ($50)
        [landscape/kits.md#sunfounder-pisloth]

Week 3-4：擴展能力
    │
    ├─→ 加入感測器
    │   超音波避障、循線、遙控
    │
    └─→ 社群求助
        r/robotics, Arduino Forum
        [landscape/communities.md#r-robotics]
```

### 可能卡關點
- **問題**：程式編譯錯誤看不懂
- **來自 Gap #2**：入門套件到進階專案有斷層
- **解法**：先在 Arduino Forum 搜尋錯誤訊息

### 下一步
- 想做更複雜的 → 路線 C
- 想加入 AI → 路線 B

---

## 路線 B：軟體轉硬體

### 適合誰
- 會寫 Python/JS，但沒碰過硬體
- 想做有 AI 能力的機器人
- 預算 $150-400 USD

### 起點
Python 基礎、能跑 Jupyter Notebook

### 學習路徑

```
Week 1：硬體入門
    │
    ├─→ 學習資源：Raspberry Pi 官方教程
    │   [landscape/learning.md#raspberry-pi-projects]
    │
    └─→ 購買建議：Raspberry Pi 4 + Sense HAT
        [landscape/hardware.md#raspberry-pi]

Week 2-3：機器人平台
    │
    ├─→ 選項 A：輪式 + 攝影機
    │   SunFounder PiCar-X ($100)
    │   [landscape/kits.md#sunfounder-picar-x]
    │
    └─→ 選項 B：機械手臂
        Hiwonder xArm ($150-250)
        [landscape/kits.md#hiwonder-xarm-series]

Week 3-4：加入 AI
    │
    ├─→ 框架學習：LeRobot
    │   [landscape/toolchains.md#lerobot]
    │
    └─→ 視覺感測：OpenCV + Pi Camera
        [landscape/toolchains.md#opencv]

Week 4-6：完整專案
    │
    └─→ 參考專案：LeRobot 官方範例
        物體追蹤、手勢控制、模仿學習
```

### 可能卡關點
- **問題**：硬體接線看不懂
- **來自 Gap #3**：AI 視覺與硬體整合教程碎片化
- **解法**：先看 LeRobot 端對端範例，再回頭理解細節

### 下一步
- 想做移動機器人 → 路線 C
- 想做研究專案 → 路線 D

---

## 路線 C：ROS 進階

### 適合誰
- 已經跑過 ROS/ROS2 範例
- 想做完整的自主機器人（SLAM、導航）
- 預算 $500-2000 USD

### 起點
知道 ROS 的 topic/node/launch

### 學習路徑

```
Week 1-2：ROS 2 環境
    │
    ├─→ 學習資源：ROS 2 Documentation
    │   [landscape/learning.md#ros-2-documentation]
    │
    └─→ 中文補充：d2l-ros2（動手學 ROS2）
        [landscape/chinese_ecosystem.md#動手學-ros2--d2l-ros2]

Week 3-4：模擬環境
    │
    ├─→ 工具：Gazebo + Isaac Sim
    │   [landscape/toolchains.md#gazebo]
    │   [landscape/toolchains.md#nvidia-isaac-sim]
    │
    └─→ 參考：Articulated Robotics 教程
        [landscape/creators.md#articulated-robotics]

Month 2：感測器整合
    │
    ├─→ LiDAR：RPLIDAR A1/A2
    │   [landscape/hardware.md#slamtec-rplidar]
    │
    ├─→ 深度相機：Intel RealSense / Luxonis OAK
    │   [landscape/hardware.md#intel-realsense-d400-series]
    │   [landscape/hardware.md#luxonis-oak-opencv-ai-kit]
    │
    └─→ IMU：整合到 robot_localization
        [landscape/toolchains.md#ros2-control]

Month 2-3：導航系統
    │
    ├─→ SLAM：slam_toolbox
    │   [landscape/toolchains.md#slam-toolbox]
    │
    └─→ Navigation：Nav2
        [landscape/toolchains.md#nav2-navigation-2]

Month 3：Sim-to-Real
    │
    └─→ 框架：Isaac Lab / Genesis
        [landscape/toolchains.md#nvidia-isaac-lab]
        [landscape/toolchains.md#genesis]
```

### 可能卡關點
- **問題**：模擬與實機行為不一致
- **來自 Gap #9**：Sim-to-Real 教程分散
- **解法**：參考 RSL-RL 的 domain randomization 設定

### 下一步
- 想做人形機器人 → 探索 humanoid 專案
- 想發論文 → 路線 D

---

## 路線 D：學術專案

### 適合誰
- 需要做畢業專案或實驗室研究
- 需要可複製、可引用的成果
- 預算依專案而定

### 起點
依專案需求而定

### 學習路徑

```
Phase 1：選擇平台
    │
    ├─→ 標準平台（可複製性高）
    │   TurtleBot 4 [landscape/kits.md#turtlebot-4]
    │   LoCoBot [landscape/kits.md#locobot]
    │
    └─→ 學術框架
        RoboSuite [landscape/toolchains.md#robosuite]
        LIBERO [landscape/learning.md#libero]

Phase 2：複製 Baseline
    │
    ├─→ 找 GitHub 有開源程式碼的論文
    │   Papers with Code
    │   [landscape/platforms.md#papers-with-code]
    │
    └─→ 使用標準 Benchmark
        RLBench [landscape/toolchains.md#rlbench]
        RoboCasa [landscape/toolchains.md#robocasa]

Phase 3：迭代實驗
    │
    └─→ 記錄工具
        Weights & Biases, MLflow
        研究社群：ROS Discourse
        [landscape/communities.md#ros-discourse]
```

### 可能卡關點
- **問題**：論文程式碼跑不起來
- **來自 Gap #6**：專案可複製性問題
- **解法**：優先選有 Docker 或 Conda 環境的專案

---

## 路線 E：探索

### 適合誰
- 對機器人有興趣但還不確定方向
- 想先了解有什麼可能
- 暫時不想花錢

### 起點
好奇心

### 探索路徑

```
Day 1-3：看看有什麼
    │
    ├─→ 專案平台：Hackster.io 的 Robotics 分類
    │   [landscape/platforms.md#hackster-io]
    │
    └─→ 影片頻道：
        Stuff Made Here [landscape/creators.md#stuff-made-here]
        James Bruton [landscape/creators.md#james-bruton]

Day 4-7：理解類型
    │
    ├─→ 機械手臂：看 BCN3D Moveo、Open Manipulator
    ├─→ 移動機器人：看 Linorobot、TurtleBot
    ├─→ 四足機器人：看 Petoi Bittle、Stanford Pupper
    └─→ 人形機器人：看 InMoov、Poppy Humanoid

Week 2：評估自己
    │
    ├─→ 問自己：我比較想「組裝」還是「設計」？
    ├─→ 問自己：我有多少預算？
    └─→ 問自己：我有多少時間？

決定方向
    │
    └─→ 選擇路線 A/B/C/D
```

### 可能卡關點
- **問題**：選擇太多，不知道怎麼決定
- **來自 Gap #10**：資訊過度分散
- **解法**：先限制預算，用預算篩選選項

---

## 卡關點總表（來自 Gaps）

| 路線 | 常見卡關點 | 對應 Gap | 建議解法 |
|------|-----------|---------|---------|
| A | 程式錯誤看不懂 | #2 | 搜尋 Arduino Forum |
| B | 硬體接線搞不懂 | #3 | 看 LeRobot 完整範例 |
| C | Sim-to-Real 不一致 | #9 | Domain randomization |
| C | 感測器整合困難 | #5 | 參考 Articulated Robotics |
| D | 程式碼跑不起來 | #6 | 選有 Docker 的專案 |
| E | 選擇太多 | #10 | 先限制預算 |

---

*所有資源連結都來自現有 landscape 檔案，未新增任何外部資源。*

# 🔧 Toolchains - 軟體工具與框架

軟體工具、框架、SDK、開發環境。

---

## Schema

```markdown
### [條目名稱]

- **Name**：
- **Type**：Tool / Docs / Repo hub
- **Primary language**：
- **一句話定位**：
- **強項（≤3）**：
- **弱項/缺口（≤3，可觀察）**：
- **活躍度訊號**：
- **與我們的關聯（一句話）**：
- **Link(s)**：
```

---

## 條目

### Gazebo

- **Name**：Gazebo
- **Type**：Simulation Platform
- **Primary language**：English
- **一句話定位**：開源機器人模擬器，與 ROS 深度整合，提供完整的物理引擎與感測器模擬
- **強項（≤3）**：
  - 與 ROS 2 原生整合，支援 Jazzy LTS 版本
  - 提供完整的感測器模擬（相機、光達、IMU 等）
  - 多版本選擇：Ionic (2024-09 ~ 2026-09)、Jetty LTS (2025-09 ~ 2030-09)、Harmonic LTS (2023-09 ~ 2028-09)
- **弱項/缺口（≤3，可觀察）**：
  - 學習曲線陡峭，需要 SDF/URDF 知識
  - 無中文文件
  - 對硬體要求較高（GPU 加速）
- **活躍度訊號**：Ionic (Jan 2026 發布 gz-sim 9)；Jetty LTS 持續開發；下一版 Kura 預計 Aug 2026
- **2026-01-31 補強**：新增 Ionic 版本（2024-09 ~ 2026-09）和 Kura 預告（2026-08 ~ 2028-09）；完整 release 表見 gazebosim.org/docs/ionic/releases
- **與我們的關聯（一句話）**：ROS 生態系統的標準模擬器，開發機器人前必須掌握
- **Link(s)**：https://gazebosim.org/

---

### ROS (Robot Operating System)

- **Name**：ROS (Robot Operating System)
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：機器人軟體開發的事實標準框架，提供通訊、工具與函式庫
- **強項（≤3）**：
  - ROS 2 Jazzy LTS 支援 Ubuntu 24.04 和 Windows 10
  - 龐大生態系統：數千個現成套件
  - 活躍社群：discourse.ros.org、ROSCon 年會
- **弱項/缺口（≤3，可觀察）**：
  - ⚠️ ROS 1 將於 **2025-05-31 EOL**（僅剩 4 個月！），仍有大量舊專案需遷移
  - 安裝配置複雜，對初學者不友善
  - 中文資源有限（Wiki 有 15 語言但中文覆蓋率低）
- **活躍度訊號**：ROS 2 下載量達 80%+；Kilted Kaiju 短期版本；Jazzy LTS 至 2029；Rolling 持續更新
- **2026-01-31 補強**：修正 ROS 1 EOL 日期為 2025-05-31（非 2026）；根據 ROS blog 12/16/2024，EOL 後無安全更新、bug 修復、binaries 更新但仍託管
- **與我們的關聯（一句話）**：任何嚴肅的機器人專案都應考慮 ROS，它是產業與學術界的共同語言
- **Link(s)**：https://www.ros.org/ | https://docs.ros.org/

---

### PlatformIO

- **Name**：PlatformIO
- **Type**：IDE / Build System
- **Primary language**：English
- **一句話定位**：跨平台嵌入式開發環境，支援 1000+ 開發板與多種框架
- **強項（≤3）**：
  - 支援 Arduino、ESP-IDF、Zephyr、mbed 等主流框架
  - VS Code 原生整合，現代化開發體驗
  - 統一的套件管理與依賴處理
- **弱項/缺口（≤3，可觀察）**：
  - 進階功能需付費（PlatformIO Plus）
  - 文件分散，部分框架整合文件不完整
  - 無中文介面
- **活躍度訊號**：支援 ARM mbed、Atmel、Intel、Microchip、TI 等主流平台
- **與我們的關聯（一句話）**：取代 Arduino IDE 的現代選擇，嵌入式開發必備工具
- **Link(s)**：https://platformio.org/

---

### micro-ROS

- **Name**：micro-ROS
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：將 ROS 2 帶到資源受限微控制器的橋接框架
- **強項（≤3）**：
  - 支援多種 RTOS（FreeRTOS、Zephyr、NuttX）
  - 與 ROS 2 無縫整合，使用相同的概念與工具
  - 原生整合於 Vulcanexus（一站式 ROS 2 工具集）
- **弱項/缺口（≤3，可觀察）**：
  - 需要專業知識配置傳輸層
  - 非安全標準開發，不適用安全關鍵應用
  - 中文資源極少
- **活躍度訊號**：GitHub 活躍開發，ROS 2 Embedded Working Group 每月線上會議
- **與我們的關聯（一句話）**：讓微控制器直接加入 ROS 網路，實現邊緣運算與低延遲控制
- **Link(s)**：https://micro.ros.org/ | https://github.com/micro-ROS/

---

### MoveIt

- **Name**：MoveIt
- **Type**：Motion Planning Framework
- **Primary language**：English
- **一句話定位**：ROS 生態系統中最廣泛使用的運動規劃與操控框架
- **強項（≤3）**：
  - 已用於 150+ 種機器人，是操控領域的事實標準
  - 提供 Setup Assistant 快速配置任何機器人
  - 支援 3D 感知（Octomaps）、碰撞檢測、逆向運動學
- **弱項/缺口（≤3，可觀察）**：
  - 配置複雜，需要理解 URDF、運動學、控制器介面
  - MoveIt 2 與 ROS 2 版本對應關係需注意（Jazzy 推薦）
  - 文件以研究人員為主要對象
- **活躍度訊號**：MoveIt K 開發中（2025 年 6 月預計發布）
- **與我們的關聯（一句話）**：機器手臂專案的核心規劃引擎，從模擬到實機一步之遙
- **Link(s)**：https://moveit.ai/

---

### Wokwi

- **Name**：Wokwi
- **Type**：Online Simulator
- **Primary language**：English
- **一句話定位**：世界上最先進的 ESP32 線上模擬器，支援 Arduino 與自訂晶片設計
- **強項（≤3）**：
  - 完全在瀏覽器中運行，無需安裝
  - 支援 ESP32、Arduino、Raspberry Pi Pico 等主流板
  - 與 Tiny Tapeout 合作，可將設計轉為實體晶片
- **弱項/缺口（≤3，可觀察）**：
  - 進階功能需 Wokwi Pro 付費
  - 物理模擬有限（無法模擬複雜機構）
  - 無中文介面
- **活躍度訊號**：被多所大學採用（Wokwi Classroom），有活躍 Discord 社群
- **與我們的關聯（一句話）**：快速原型驗證和教學的理想工具，零硬體成本開始學習
- **Link(s)**：https://wokwi.com/

---

### Webots

- **Name**：Webots
- **Type**：Simulation Platform
- **Primary language**：English
- **一句話定位**：開源跨平台機器人模擬器，由 Cyberbotics 自 1998 年持續維護
- **強項（≤3）**：
  - 內建豐富的機器人資產庫（輪式、手臂、腿足、無人機、自駕車等）
  - 支援 C/C++/Python/Java/MATLAB/ROS 控制器開發
  - 可匯出為網頁互動場景（WebGL）
- **弱項/缺口（≤3，可觀察）**：
  - 商業支援需額外付費（CHF 500-2500/年）
  - 與 ROS 的整合不如 Gazebo 緊密
  - 無中文文件
- **活躍度訊號**：GitHub 開源，整合於 Vulcanexus，被 OpenDR 歐盟研究計畫採用
- **與我們的關聯（一句話）**：Gazebo 之外的開源模擬選擇，適合需要網頁部署的專案
- **Link(s)**：https://cyberbotics.com/ | https://github.com/cyberbotics/webots

---

### FreeCAD

- **Name**：FreeCAD
- **Type**：CAD Software
- **Primary language**：English
- **一句話定位**：開源參數化 3D CAD 建模器，專為真實世界物件設計
- **強項（≤3）**：
  - 1.0 版本里程碑，穩定性與易用性大幅提升
  - 支援 FEA 分析、CFD 模擬、機器人模擬模組
  - 跨平台（Windows/Mac/Linux），支援 STEP/IGES/STL/DXF 等格式
- **弱項/缺口（≤3，可觀察）**：
  - 學習曲線較商業 CAD 陡峭
  - 複雜模型性能有待優化
  - 無內建雲端協作功能
- **活躍度訊號**：版本 1.0 發布，活躍的 GitHub 社群與附加模組生態
- **與我們的關聯（一句話）**：設計機器人零件與外殼的免費專業級工具
- **Link(s)**：https://www.freecad.org/

---

### OpenSCAD

- **Name**：OpenSCAD
- **Type**：CAD Software
- **Primary language**：English
- **一句話定位**：程式化 3D CAD 建模器，使用腳本而非互動式建模
- **強項（≤3）**：
  - 完全程式化，適合參數化設計與自動化
  - 提供線上 Playground 可直接在瀏覽器中使用
  - 與 Thingiverse/Printables 整合，大量現成設計
- **弱項/缺口（≤3，可觀察）**：
  - 非傳統 CAD 工作流程，需學習 OpenSCAD 語法
  - 無法處理有機形狀（適合機械零件）
  - 渲染複雜模型速度較慢
- **活躍度訊號**：活躍的 IRC 頻道 (#openscad)，有專門書籍出版
- **與我們的關聯（一句話）**：程式設計師友善的 CAD 工具，適合可參數化的機器人零件
- **Link(s)**：https://openscad.org/

---

### KiCad

- **Name**：KiCad
- **Type**：EDA Software
- **Primary language**：English
- **一句話定位**：開源電子設計自動化（EDA）套件，涵蓋電路圖與 PCB 設計
- **強項（≤3）**：
  - 從電路圖到 PCB 到 3D 預覽的完整工作流程
  - 內建 SPICE 模擬器和電氣規則檢查
  - 官方元件庫包含數千個符號與封裝
- **弱項/缺口（≤3，可觀察）**：
  - 進階功能（如自動布線）需外掛
  - 學習曲線較商業 EDA 軟體陡峭
  - 無中文介面（但有中文文件）
- **活躍度訊號**：持續開發，被專業開發者與業餘愛好者廣泛採用
- **與我們的關聯（一句話）**：DIY 機器人電路板設計的標準工具，從原型到量產
- **Link(s)**：https://www.kicad.org/

---

### NVIDIA Isaac Sim

- **Name**：NVIDIA Isaac Sim
- **Type**：Simulation Platform
- **Primary language**：English
- **一句話定位**：基於 Omniverse 的 AI 驅動機器人模擬與訓練平台
- **強項（≤3）**：
  - 支援人形、機械臂、四足、AMR 等多種機器人類型
  - 內建合成數據生成與 PhysX 物理引擎
  - 與 Isaac Lab 整合，可進行機器人學習
- **弱項/缺口（≤3，可觀察）**：
  - 需要 NVIDIA GPU（RTX 系列推薦）
  - 硬體門檻高，學習曲線陡峭
  - 主要面向企業與研究機構
- **活躍度訊號**：開源（GitHub），Office Hours 定期舉辦，Newton 物理引擎 Beta 發布
- **與我們的關聯（一句話）**：AI 機器人研發的高端選項，適合進階訓練與數據生成
- **Link(s)**：https://developer.nvidia.com/isaac/sim | https://github.com/isaac-sim/IsaacSim

---

### CircuitPython

- **Name**：CircuitPython
- **Type**：Programming Language / Runtime
- **Primary language**：English
- **一句話定位**：Adafruit 維護的微控制器 Python，專為教育與快速原型設計
- **強項（≤3）**：
  - 無需安裝，透過 code.circuitpython.org 直接編程
  - 支援 600+ 開發板，即存即執行
  - 500+ 現成函式庫，Blinka 支援 Raspberry Pi
- **弱項/缺口（≤3，可觀察）**：
  - 效能不如 C/C++ 或 MicroPython
  - 主要由 Adafruit 主導，硬體偏向 Adafruit 產品
  - 無中文文件
- **活躍度訊號**：持續發布更新，Adafruit Learning System 整合
- **與我們的關聯（一句話）**：初學者友善的微控制器開發入口，降低嵌入式程式設計門檻
- **Link(s)**：https://circuitpython.org/

---

### MicroPython

- **Name**：MicroPython
- **Type**：Programming Language / Runtime
- **Primary language**：English
- **一句話定位**：精簡高效的 Python 3 實現，專為微控制器與受限環境設計
- **強項（≤3）**：
  - 僅需 256k 代碼空間和 16k RAM 即可運行
  - 支援互動式 REPL、例外處理、生成器等進階功能
  - 官方 pyboard 開發板提供完整體驗
- **弱項/缺口（≤3，可觀察）**：
  - 相比 C/C++ 執行效率較低
  - 官方函式庫較 CircuitPython 少
  - 文件以技術使用者為主要對象
- **活躍度訊號**：持續開發，Adafruit 提供財務支援，GitHub 贊助
- **與我們的關聯（一句話）**：CircuitPython 的基礎，更輕量的嵌入式 Python 選擇
- **Link(s)**：https://micropython.org/

---

---

### Nav2 (Navigation 2)

- **Name**：Nav2
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：ROS 2 的官方導航堆棧，提供路徑規劃、控制、定位、行為樹等完整導航功能
- **強項（≤3）**：
  - 生產級品質，被 100+ 企業採用
  - 支援各類機器人底盤（全向輪、差速、Ackermann、腿式）
  - 完整的行為樹整合，可高度客製化導航行為
- **弱項/缺口（≤3，可觀察）**：
  - 配置複雜，需理解多個 ROS 2 概念（TF、Costmap、BT）
  - 無中文文檔
  - 對硬體要求較高（需要 LiDAR 或深度相機）
- **活躍度訊號**：Jazzy/Kilted LTS 支援，Open Navigation LLC 商業支援
- **與我們的關聯（一句話）**：自主移動機器人的導航核心，從 SLAM 到路徑規劃的完整方案
- **Link(s)**：https://docs.nav2.org/

---

### LeRobot

- **Name**：LeRobot
- **Type**：Framework / Dataset Platform
- **Primary language**：English (有中文教程)
- **一句話定位**：Hugging Face 的開源機器人學習框架，提供模型、數據集和工具，降低機器人學習門檻
- **強項（≤3）**：
  - 統一的 LeRobotDataset 格式（Parquet + MP4），與 HuggingFace Hub 整合
  - 支援多種硬體（SO-100/101、Koch、OMX、Unitree G1、Earth Rover 等）
  - 實現最先進策略（ACT、Diffusion、VQ-BeT、VLA、X-VLA 等）
- **弱項/缺口（≤3，可觀察）**：
  - 需要一定的 Python 和深度學習基礎
  - 硬體整合仍在快速迭代中
  - 中文教程為社群貢獻，非官方維護
- **活躍度訊號**：v0.4.3 於 2026-01-22 發布，GitHub 活躍開發，Discord 社群活躍，有同濟子豪兄的中文教程
- **與我們的關聯（一句話）**：機器人模仿學習和強化學習的民主化工具，降低 AI 機器人門檻
- **Link(s)**：https://github.com/huggingface/lerobot | https://huggingface.co/docs/lerobot/

> **補強 2026-01-31**：v0.4.3 新增 Unitree G1 人形機器人支援、X-VLA（Vision-Language-Action）策略、Earth Rover Mini Plus 整合、OMX 機器人支援、MuJoCo 環境整合。新增第三方策略插件機制（pip install lerobot_policy_xxx），支援可變圖像尺寸的 Pi0/Pi0.5 模型。生態系統持續擴張中。

---

### Isaac Lab

- **Name**：Isaac Lab
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：基於 NVIDIA Isaac Sim 的 GPU 加速機器人學習框架，專注 sim-to-real 轉移
- **強項（≤3）**：
  - GPU 加速模擬，支援大規模並行訓練
  - 30+ 現成環境（操控、移動、人形）
  - 支援主流 RL 框架（RSL RL、SKRL、RL Games、Stable Baselines）
- **弱項/缺口（≤3，可觀察）**：
  - 需要 NVIDIA GPU（RTX 系列）
  - 依賴 Isaac Sim，安裝配置複雜
  - 主要面向研究和進階使用者
- **活躍度訊號**：BSD-3 授權，有 arXiv 論文，GitHub 活躍開發
- **與我們的關聯（一句話）**：機器人學習的高性能訓練平台，專為 sim-to-real 設計
- **Link(s)**：https://github.com/isaac-sim/IsaacLab | https://isaac-sim.github.io/IsaacLab/

---

### Newton Physics

- **Name**：Newton Physics
- **Type**：Simulation Engine
- **Primary language**：English
- **一句話定位**：下一代開源 GPU 加速物理引擎，由 Disney Research、Google DeepMind、NVIDIA 共同開發
- **強項（≤3）**：
  - Linux Foundation 專案，Apache 2.0 授權
  - 基於 NVIDIA Warp，與 OpenUSD 整合
  - 兼容 MuJoCo Playground 和 Isaac Lab
- **弱項/缺口（≤3，可觀察）**：
  - 仍在 Beta 階段，API 可能變動
  - 需要一定的物理模擬背景
  - 文檔尚不完整
- **活躍度訊號**：2025 年初發布 Beta，Google DeepMind 和 Disney Research 持續貢獻
- **與我們的關聯（一句話）**：開源物理模擬的未來方向，可能成為機器人學習的新標準
- **Link(s)**：https://github.com/newton-physics | https://newton-physics.github.io/newton/

---

---

### MuJoCo

- **Name**：MuJoCo (Multi-Joint dynamics with Contact)
- **Type**：Physics Engine / Simulation Platform
- **Primary language**：English
- **一句話定位**：DeepMind 維護的高性能物理模擬器，是機器人學習領域的事實標準引擎
- **強項（≤3）**：
  - 速度與精度的最佳平衡，支援 GPU 加速（MJX/JAX 版本）
  - Apache 2.0 開源（2022 年後），GitHub 12K+ stars
  - MuJoCo Playground 提供 170+ 現成訓練環境
- **弱項/缺口（≤3，可觀察）**：
  - 需要理解 MJCF 模型格式（XML 描述）
  - 無中文文檔
  - 視覺化能力較專業遊戲引擎弱
- **活躍度訊號**：GitHub 100+ 貢獻者、890K 下載、5.1K 依賴專案；28.01.2026 最新更新
- **與我們的關聯（一句話）**：機器人強化學習的核心引擎，幾乎所有現代 RL 論文都使用它
- **Link(s)**：https://mujoco.org/ | https://github.com/google-deepmind/mujoco

---

### Drake

- **Name**：Drake
- **Type**：Robotics Toolbox
- **Primary language**：English
- **一句話定位**：MIT/TRI 聯合開發的模型導向機器人設計與驗證工具箱，專注於最佳化與控制
- **強項（≤3）**：
  - C++/Python 雙介面，強調數學嚴謹性（解析梯度、多項式結構、不確定性量化）
  - 複雜動力學模擬（摩擦、接觸、空氣動力學）
  - 與 MIT 機器人課程（6.800/6.8210）深度整合
- **弱項/缺口（≤3，可觀察）**：
  - 學習曲線較陡，需要控制理論背景
  - ROS 2 整合為「非官方」（unsupported）
  - 無中文文檔
- **活躍度訊號**：Toyota Research Institute 核心資助，有 Deepnote 線上教學、Gallery 範例集
- **與我們的關聯（一句話）**：進階機器人學習者的控制與最佳化參考框架，學術品質保證
- **Link(s)**：https://drake.mit.edu/ | https://github.com/RobotLocomotion/drake

---

### PyBullet / Bullet Physics

- **Name**：PyBullet / Bullet Physics
- **Type**：Physics Engine
- **Primary language**：English
- **一句話定位**：廣泛使用的開源物理引擎，VR/遊戲/機器人通用，PyBullet 提供 Python 介面
- **強項（≤3）**：
  - 剛體動力學與軟體（布料、繩索）模擬
  - OpenAI Gym 環境整合，大量 RL 範例
  - 輕量級，適合快速原型驗證
- **弱項/缺口（≤3，可觀察）**：
  - 相比 MuJoCo 在機器人學習精度較低
  - 開發活躍度下降（⚠️ Brax 官方建議改用 MJX）
  - 文檔分散，無統一入口
- **活躍度訊號**：PyBullet 3.22 版本，SourceForge 分發
- **與我們的關聯（一句話）**：入門 RL 模擬的經典選擇，大量舊專案和教學使用它
- **Link(s)**：https://pybullet.org/ | https://github.com/bulletphysics/bullet3

---

### Brax

- **Name**：Brax
- **Type**：Differentiable Physics Engine
- **Primary language**：English
- **一句話定位**：Google 基於 JAX 的可微分物理引擎，專為大規模並行訓練設計
- **強項（≤3）**：
  - 百萬級物理步/秒，支援 TPU/GPU 加速
  - 可微分模擬支援解析策略梯度
  - 一套 API 支援四種物理管線（MJX、Generalized、Positional、Spring）
- **弱項/缺口（≤3，可觀察）**：
  - ⚠️ 0.13.0 版後僅維護 brax/training，brax/envs 被棄用
  - 官方建議環境改用 MuJoCo Playground
  - 物理模擬部分建議改用 MJX 或 MuJoCo Warp
- **活躍度訊號**：NeurIPS 2021 論文，v0.14.0 版本
- **與我們的關聯（一句話）**：了解可微分模擬的歷史，但新專案應考慮 MJX
- **Link(s)**：https://github.com/google/brax

---

### CoppeliaSim

- **Name**：CoppeliaSim (前身 V-REP)
- **Type**：Simulation Platform
- **Primary language**：English
- **一句話定位**：分散式控制架構的機器人模擬器，支援 5 種物理引擎與多種程式語言
- **強項（≤3）**：
  - 支援 MuJoCo、Bullet、ODE、Newton、Vortex 五種物理引擎可切換比較
  - Python/Lua/Java/MATLAB/C++/Rust 多語言 API
  - 完整的逆運動學與路徑規劃（OMPL 整合）
- **弱項/缺口（≤3，可觀察）**：
  - 教育版免費，商業版需付費授權
  - 社群規模較 Gazebo 小
  - 無中文文檔
- **活躍度訊號**：V4.10.0 最新版本（2026-01），GitHub 持續更新
- **與我們的關聯（一句話）**：多物理引擎比較的理想平台，教育與原型開發的優選
- **Link(s)**：https://www.coppeliarobotics.com/ | https://github.com/CoppeliaRobotics/

---

### Gymnasium (OpenAI Gym)

- **Name**：Gymnasium (前身 OpenAI Gym)
- **Type**：API Standard / Environment Library
- **Primary language**：English
- **一句話定位**：強化學習環境的 API 標準，提供統一介面讓 RL 演算法與各種模擬器互動
- **強項（≤3）**：
  - 事實標準：幾乎所有 RL 函式庫都支援 Gymnasium API
  - Farama Foundation 維護，GitHub 11K+ stars
  - 豐富的官方與第三方環境（MuJoCo、Atari、Box2D 等）
- **弱項/缺口（≤3，可觀察）**：
  - 本身不包含物理引擎（需搭配 MuJoCo/PyBullet 等）
  - 從 Gym 遷移到 Gymnasium 需適應 API 變更
  - 無中文文檔
- **活躍度訊號**：取代已停維的 OpenAI Gym，持續活躍開發
- **與我們的關聯（一句話）**：RL 開發的必備知識，理解環境-代理介面的標準
- **Link(s)**：https://gymnasium.farama.org/ | https://github.com/Farama-Foundation/Gymnasium

---

### EasyEDA

- **Name**：EasyEDA
- **Type**：EDA Software (Online)
- **Primary language**：English / 中文
- **一句話定位**：全球首個整合完整供應鏈的雲端 EDA 軟體，從設計到 PCB 製造一站式服務
- **強項（≤3）**：
  - 雲端/桌面雙版本，無需安裝即可開始設計
  - 與 JLCPCB 整合，一鍵下單製造
  - 海量元件庫（符號、封裝、3D 模型）含即時庫存與價格
- **弱項/缺口（≤3，可觀察）**：
  - 進階功能需付費（企業版、本地私有部署）
  - 資料安全依賴 AWS 雲端
  - 專業 PCB 設計師可能偏好傳統 EDA
- **活躍度訊號**：13 年開發歷史，LCEDA 立創開源硬件平台整合
- **與我們的關聯（一句話）**：中國開發者的 PCB 設計首選，降低從設計到製造的門檻
- **Link(s)**：https://www.easyeda.com/ | https://lceda.cn/

---

### CARLA

- **Name**：CARLA
- **Type**：Simulation Platform
- **Primary language**：English
- **一句話定位**：開源自動駕駛研究模擬器，提供城市環境、多種天氣、感測器模擬
- **強項（≤3）**：
  - GitHub 14K+ stars，自動駕駛研究領域標準
  - 基於 Unreal Engine，高視覺真實度
  - 支援多感測器（RGB、深度、LiDAR、RADAR）與多車模擬
- **弱項/缺口（≤3，可觀察）**：
  - 硬體需求高（推薦 RTX GPU）
  - 安裝配置較複雜（Unreal Engine 依賴）
  - 專注自動駕駛，非通用機器人模擬
- **活躍度訊號**：MIT 授權，活躍社群，持續開發
- **與我們的關聯（一句話）**：自動駕駛 AI 開發的入門平台，學術與產業廣泛使用
- **Link(s)**：https://carla.org/ | https://github.com/carla-simulator/carla

---

### ManiSkill 3

- **Name**：ManiSkill 3 (SAPIEN Manipulation Skill Framework)
- **Type**：Simulation Platform / Benchmark
- **Primary language**：English
- **一句話定位**：GPU 並行機器人模擬器與 benchmark，專注於操控技能訓練，30,000+ FPS 數據收集
- **強項（≤3）**：
  - GPU 並行模擬：單 4090 可達 30,000+ FPS RGBD + Segmentation 數據收集
  - 異構並行：每個環境可有完全不同的場景/物件
  - 完整 baseline 整合：PPO、SAC、TD-MPC2、Diffusion Policy、Octo、RDT-1B
- **弱項/缺口（≤3，可觀察）**：
  - Beta 版本，部分功能仍在開發
  - 需要 Vulkan 配置，Windows/macOS 支援有限
  - 需要 NVIDIA GPU 才能發揮 GPU sim 性能
- **活躍度訊號**：RSS 2025 論文，GitHub 持續活躍，Discord 社群活躍
- **與我們的關聯（一句話）**：大規模機器人操控訓練的前沿模擬平台，適合 RL/IL 研究
- **Link(s)**：https://github.com/haosulab/ManiSkill | https://maniskill.readthedocs.io/

---

### Unity Robotics Hub

- **Name**：Unity Robotics Hub
- **Type**：Simulation Platform / Integration Hub
- **Primary language**：English
- **一句話定位**：Unity 官方機器人模擬中心，提供 ROS 1/2 整合、URDF 導入、Nav2 SLAM 範例
- **強項（≤3）**：
  - ROS 1 (Noetic/Melodic) + ROS 2 (Foxy) 雙向通訊整合
  - URDF Importer：可導入現有機器人模型
  - 完整教程：Pick-and-Place、Object Pose Estimation、Nav2 SLAM
- **弱項/缺口（≤3，可觀察）**：
  - 需要 Unity 2020.2+ 版本
  - 學習曲線較高（需同時了解 Unity 和 ROS）
  - 物理引擎不如專業機器人模擬器精確
- **活躍度訊號**：Unity Technologies 官方維護，有活躍論壇和 newsletter
- **與我們的關聯（一句話）**：遊戲引擎做機器人模擬的官方方案，適合需要高視覺真實度的應用
- **Link(s)**：https://github.com/Unity-Technologies/Unity-Robotics-Hub

---

### SimplerEnv

- **Name**：SimplerEnv (Simulated Manipulation Policy Evaluation)
- **Type**：Evaluation Framework / Sim-to-Real
- **Primary language**：English
- **一句話定位**：用模擬評估真實世界機器人策略（RT-1、Octo 等）的框架，CoRL 2024 論文
- **強項（≤3）**：
  - 支援 Google Robot、WidowX+Bridge 等常見機器人設置
  - 兩種評估模式：Visual Matching（真實圖像疊加）、Variant Aggregation（變體平均）
  - ManiSkill3 整合可獲得 10-15x 速度提升
- **弱項/缺口（≤3，可觀察）**：
  - 專注於策略評估，非通用模擬器
  - CUDA 11.8+ 需求
  - 需要額外安裝 RT-1/Octo 模型進行完整測試
- **活躍度訊號**：CoRL 2024 論文，GitHub 活躍，有 Colab notebook
- **與我們的關聯（一句話）**：Real-to-Sim 策略評估的標準方法，適合驗證模仿學習策略
- **Link(s)**：https://github.com/simpler-env/SimplerEnv | https://simpler-env.github.io/

---

### IR-SIM

- **Name**：IR-SIM (Intelligent Robot Simulator)
- **Type**：Simulation Platform
- **Primary language**：English / 中文
- **一句話定位**：輕量級 Python 機器人模擬器，專注於導航、控制與強化學習
- **強項（≤3）**：
  - 輕量級設計：YAML 配置，matplotlib 視覺化，pip install 即用
  - 支援多代理碰撞避免（RVO/ORCA），適合多機器人研究
  - 有完整的中英文雙語文檔
- **弱項/缺口（≤3，可觀察）**：
  - 2D 模擬為主（部分 3D 功能透過 habitat 整合）
  - 視覺化較簡單（非 3D 渲染）
  - 生態較小，套件成熟度不及 Gazebo
- **活躍度訊號**：GitHub 2026-01 持續更新，PyPI 定期發布
- **與我們的關聯（一句話）**：2D 導航和多機器人 RL 研究的快速原型工具，有中文文檔
- **Link(s)**：https://github.com/hanruihua/ir-sim | https://ir-sim.readthedocs.io/

---

### OpenCat

- **Name**：OpenCat (Petoi Framework)
- **Type**：Framework / Open Source Robot Platform
- **Primary language**：English / 中文
- **一句話定位**：Petoi 開源四足機器人框架，支援 Bittle 和 Nybble 機器人的 STEM 教育和 AI 研究
- **強項（≤3）**：
  - 完整開源框架：Arduino 核心 + Raspberry Pi 擴展，支援 Block/C++/Python 編程
  - NVIDIA Isaac 整合範例、ROS SLAM 範例、機器學習應用
  - 有專門的 STEM 課程資源和機器人競賽支援
- **弱項/缺口（≤3，可觀察）**：
  - 主要針對 Petoi 硬體（Bittle/Nybble），移植其他硬體需改造
  - 部分進階功能需購買 Petoi 配件
  - 文檔分散在多個來源（GitHub、docs.petoi.com、petoi.camp）
- **活躍度訊號**：GitHub 活躍（2025-11 更新），ESP32 版本持續開發，有活躍社群論壇
- **與我們的關聯（一句話）**：負擔得起的四足機器人學習平台，從入門到 AI 研究的完整路徑
- **Link(s)**：https://github.com/PetoiCamp/OpenCat-Quadruped-Robot | https://docs.petoi.com/

---

### BehaviorTree.CPP

- **Name**：BehaviorTree.CPP
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：C++17 行為樹框架，是 ROS 2 Nav2 導航堆棧的核心決策引擎
- **強項（≤3）**：
  - 非同步動作為一等公民，支援多動作並行執行（正交性）
  - 使用 XML DSL 定義樹結構，可在執行時動態載入
  - 有 Groot2 GUI 編輯器，支援即時監控、斷點、錯誤注入
- **弱項/缺口（≤3，可觀察）**：
  - Groot2 PRO 版本需付費（無限節點、黑板視覺化、斷點功能）
  - 需要理解行為樹概念，有一定學習曲線
  - 無中文文檔
- **活躍度訊號**：v4.8 版本，GitHub 活躍維護，2019-2025 持續開發，MIT 授權
- **與我們的關聯（一句話）**：Nav2 的行為樹引擎，機器人複雜行為邏輯的標準實現方式
- **Link(s)**：https://github.com/BehaviorTree/BehaviorTree.CPP | https://www.behaviortree.dev/

---

### slam_toolbox

- **Name**：slam_toolbox
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：ROS 2 的 2D SLAM 標準庫，支援終身建圖、定位模式和多機器人協作
- **強項（≤3）**：
  - 支援終身建圖（lifelong mapping）：可持續更新和改進已有地圖
  - 基於優化的定位模式：可替代 AMCL，使用 pose-graph 實現彈性定位
  - 已驗證用於大規模環境：同步模式可處理 200,000 平方呎空間
- **弱項/缺口（≤3，可觀察）**：
  - 定位模式需要較多調優，非即開即用
  - 對里程計品質要求高
  - 無中文文檔
- **活躍度訊號**：JOSS 2021 論文，Nav2 官方教程推薦，Steve Macenski（Nav2 作者）維護
- **與我們的關聯（一句話）**：ROS 2 移動機器人 SLAM 的首選，從快速建圖到終身維護的完整方案
- **Link(s)**：https://github.com/SteveMacenski/slam_toolbox

---

### Foxglove

- **Name**：Foxglove
- **Type**：Tool / Platform
- **Primary language**：English
- **一句話定位**：機器人可視化和可觀察性平台，專為收集、分析和學習多模態機器人數據而設計
- **強項（≤3）**：
  - 20+ 可自訂面板：支援影像、點雲、時序、日誌等多模態數據
  - 支援即時串流、匯入和雲端存儲，不受數據格式限制
  - 被 Shield AI、Wayve、Dexterity、Simbe 等領先機器人公司採用
- **弱項/缺口（≤3，可觀察）**：
  - 進階功能（數據管理、協作）需付費訂閱
  - 開源 studio 倉庫已歸檔（2024-07），轉為商業平台
  - 無中文介面
- **活躍度訊號**：商業平台持續運營，有 SDK、Agent、CLI、API 文檔，活躍的客戶案例
- **與我們的關聯（一句話）**：現代機器人開發的專業可視化工具，從調試到生產的全流程觀察
- **Link(s)**：https://foxglove.dev/ | https://docs.foxglove.dev/

---

### robot_localization

- **Name**：robot_localization
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：Charles River Analytics 開發的非線性狀態估計包，專為 ROS 機器人感測器融合設計
- **強項（≤3）**：
  - 支援擴展卡爾曼濾波（EKF）和無跡卡爾曼濾波（UKF）
  - 可融合任意數量的 IMU、里程計、GPS 等感測器
  - GitHub 1.8K+ stars，996 forks，長期維護（2014 年至今）
- **弱項/缺口（≤3，可觀察）**：
  - 配置參數眾多，初學者需花時間理解協方差矩陣設定
  - 需要對卡爾曼濾波有基本理解
  - 無中文文檔
- **活躍度訊號**：rolling-devel 分支持續更新，ROS Wiki 有完整文檔
- **與我們的關聯（一句話）**：ROS 感測器融合的標準方案，讓多源感測器數據產生可靠的位姿估計
- **Link(s)**：https://github.com/cra-ros-pkg/robot_localization | http://wiki.ros.org/robot_localization

---

### ros2_control

- **Name**：ros2_control
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：ROS 2 的通用控制框架，提供硬體抽象層和即時控制器管理
- **強項（≤3）**：
  - 硬體抽象：統一的介面支援任何機器人硬體
  - 支援多種 ROS 2 版本：Humble、Jazzy、Kilted、Rolling
  - 有完整的控制器庫（ros2_controllers）和文檔（control.ros.org）
- **弱項/缺口（≤3，可觀察）**：
  - 學習曲線陡峭：需要理解 URDF、xacro、硬體介面概念
  - 配置檔案較複雜
  - 無中文文檔
- **活躍度訊號**：GitHub 802 stars，400 forks，多家企業和機構貢獻，Apache 2.0 授權
- **與我們的關聯（一句話）**：從模擬到實機的硬體控制標準，實現軟硬體解耦的關鍵框架
- **Link(s)**：https://github.com/ros-controls/ros2_control | https://control.ros.org/

---

### PlotJuggler

- **Name**：PlotJuggler
- **Type**：Tool
- **Primary language**：English
- **一句話定位**：時序數據可視化工具，支援 ROS 1/2、CSV、PX4 ULog 等多種數據源
- **強項（≤3）**：
  - 支援數千時序和數百萬數據點的快速 OpenGL 渲染
  - 內建變換編輯器：微分、移動平均、積分等，還支援 Lua 腳本自訂函數
  - 多平台支援：Linux AppImage、macOS、Windows、Snap、Debian 包
- **弱項/缺口（≤3，可觀察）**：
  - ROS 插件需額外安裝（plotjuggler-ros-plugins）
  - 高級功能需理解內部架構
  - 無中文介面
- **活躍度訊號**：v3.15 版本，有 Gold Sponsor（Greenzie、Intermodalics、Ark Electron），MPL-2.0 授權
- **與我們的關聯（一句話）**：機器人數據分析和調試的瑞士刀，從 rosbag 到即時串流的全覆蓋
- **Link(s)**：https://github.com/facontidavide/PlotJuggler

---

### RViz 2

- **Name**：RViz 2
- **Type**：Tool
- **Primary language**：English
- **一句話定位**：ROS 2 的 3D 機器人可視化工具，可視化機器人模型、感測器數據和規劃結果
- **強項（≤3）**：
  - 豐富的顯示類型：TF、RobotModel、PointCloud、Map、MarkerArray 等 30+ 種
  - 支援插件擴展：自訂 Display、Panel、Tool、ViewController
  - 可插拔的座標轉換庫：除 tf2 外可使用自訂轉換插件
- **弱項/缺口（≤3，可觀察）**：
  - 相比 Foxglove 功能較基礎，無雲端協作
  - 需要 ROS 2 環境才能運行
  - 無中文介面
- **活躍度訊號**：ROS 2 官方維護，Humble/Jazzy/Kilted/Rolling 全版本支援
- **與我們的關聯（一句話）**：ROS 開發者的標準可視化工具，調試機器人感知和規劃的必備
- **Link(s)**：https://github.com/ros2/rviz | http://wiki.ros.org/rviz

---

### rosbag2

- **Name**：rosbag2
- **Type**：Tool
- **Primary language**：English
- **一句話定位**：ROS 2 的數據記錄和回放工具，是 ROS 1 rosbag 的繼承者
- **強項（≤3）**：
  - 支援多種存儲格式：SQLite3（預設）、MCAP（推薦，有索引壓縮）
  - 靈活的記錄選項：按大小/時間分割、壓縮、快照模式
  - 可透過服務遠端控制：暫停、繼續、分割、快照
- **弱項/缺口（≤3，可觀察）**：
  - MCAP 壓縮需額外配置
  - 大型 bag 檔案處理需注意效能
  - 無中文文檔
- **活躍度訊號**：ROS 2 官方維護，ros-$ROS_DISTRO-rosbag2 包隨 ros-base 安裝
- **與我們的關聯（一句話）**：機器人數據收集和重現的核心工具，從調試到訓練數據的基礎設施
- **Link(s)**：https://github.com/ros2/rosbag2

---

### SimpleFOC Library

- **Name**：SimpleFOClibrary
- **Type**：Framework / Library
- **Primary language**：English
- **一句話定位**：跨平台的開源 Field Oriented Control (FOC) 庫，讓 Arduino 也能做專業的 BLDC/Stepper 馬達控制
- **強項（≤3）**：
  - 跨平台支援：Arduino UNO/MEGA/DUE、STM32、ESP32、Teensy、RP2040/RP2350
  - 感測器靈活：支援編碼器、Hall、磁性（AS5600/AS5047）、無感測器模式
  - 完整生態系：SimpleFOCStudio GUI 調參、社群驅動板（Shield/Mini）、JOSS 論文發表
- **弱項/缺口（≤3，可觀察）**：
  - 專注低功率應用（gimbal 馬達），高功率需其他方案
  - 學習曲線：需理解 FOC 原理才能調參
  - 官方驅動板限 3A 電流，大馬達需第三方硬體
- **活躍度訊號**：v2.3.5 於 2026 年發布，GitHub 活躍（持續 CI），JOSS 2022 論文被引用，Discord 社群 2000+ 成員
- **與我們的關聯（一句話）**：DIY 機器人進階馬達控制的黃金標準，從 hobby 到研究的最佳入門
- **Link(s)**：https://docs.simplefoc.com | https://github.com/simplefoc/Arduino-FOC | https://community.simplefoc.com

---

### mjlab

- **Name**：mjlab
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：結合 Isaac Lab API 與 MuJoCo-Warp 物理引擎的輕量級 GPU 加速機器人學習框架（2026 年 1 月發布）
- **強項（≤3）**：
  - 結合 Isaac Lab 成熟 API 與 MuJoCo-Warp 高效能物理：兩者優點兼得
  - 多 GPU 訓練支援：--gpu-ids 0 1 輕鬆擴展
  - 極簡安裝：uvx --from mjlab demo 即可運行 Unitree G1 示範
- **弱項/缺口（≤3，可觀察）**：
  - 需要 NVIDIA GPU（MuJoCo Warp 依賴）
  - macOS 僅支援 evaluation（顯著較慢）
  - 2026 年新發布，生態系統仍在建立
- **活躍度訊號**：arXiv:2601.22074（2026-01），Kevin Zakka（Berkeley/Pieter Abbeel）主導，GitHub 活躍，Colab 支援
- **與我們的關聯（一句話）**：2026 年最新 GPU 加速機器人學習框架，Isaac Lab 用戶的 MuJoCo 替代方案
- **Link(s)**：https://github.com/mujocolab/mjlab | https://mujocolab.github.io/mjlab/

---

### MuJoCo Warp (MJWarp)

- **Name**：MuJoCo Warp (MJWarp)
- **Type**：Physics Engine
- **Primary language**：English
- **一句話定位**：MuJoCo 的 GPU 優化版本，專為 NVIDIA 硬體設計，Google DeepMind 與 NVIDIA 聯合維護
- **強項（≤3）**：
  - GPU 加速：利用 NVIDIA Warp 避開 MuJoCo MJX (JAX) 的許多「sharp bits」
  - 整合生態系：與 MJX、Newton、mjlab、MuJoCo Playground 無縫協作
  - 功能完整：支援 Forward/Inverse dynamics、所有傳動、所有約束類型
- **弱項/缺口（≤3，可觀察）**：
  - Beta 階段：性能優化、文檔、測試仍在進行
  - CUDA 12.4+ 最低要求
  - 尚無 Warp 可微分（differentiability）支援
- **活躍度訊號**：2026 年 1 月持續更新，Google DeepMind + NVIDIA 聯合維護，已被 mjlab/Newton/Playground 採用
- **與我們的關聯（一句話）**：MuJoCo 生態系的 GPU 加速核心，大規模 RL 訓練的新標準
- **Link(s)**：https://github.com/google-deepmind/mujoco_warp | https://mujoco.readthedocs.io/en/latest/mjwarp/index.html

---

### MuJoCo Playground

- **Name**：MuJoCo Playground
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：Google DeepMind 官方的 GPU 加速機器人學習與 sim-to-real 環境套件
- **強項（≤3）**：
  - 豐富環境：dm_control 經典控制 + 四足/雙足運動 + 靈巧操作
  - 雙引擎支援：MuJoCo MJX (JAX) 和 MuJoCo Warp 可一鍵切換
  - 視覺環境：透過 Madrona-MJX 支援 vision-based 任務
- **弱項/缺口（≤3，可觀察）**：
  - 需要 Python 3.10+
  - CUDA 12 jax 安裝較複雜
  - Madrona-MJX 視覺環境需額外設置
- **活躍度訊號**：2025 年發布，pip install playground，Google Colab 教程，持續更新
- **與我們的關聯（一句話）**：Google DeepMind 官方機器人學習環境，從經典控制到 sim-to-real 的一站式方案
- **Link(s)**：https://github.com/google-deepmind/mujoco_playground | https://playground.mujoco.org/

---

### Nimble Physics

- **Name**：Nimble Physics (nimblephysics)
- **Type**：Physics Engine / ML Framework
- **Primary language**：English
- **一句話定位**：Stanford 開發的可微分物理引擎，專為生物力學和深度學習設計，可作為 PyTorch 非線性函數使用
- **強項（≤3）**：
  - 可微分物理：nimble.timestep(state, controls) 是有效的 PyTorch 函數
  - 分析性反向傳播：即使透過接觸和摩擦也能計算梯度
  - DART 相容：從 DART 物理引擎 fork，許多 DART 模擬可直接移植
- **弱項/缺口（≤3，可觀察）**：
  - Beta 軟體：仍在積極開發
  - Arm64 Mac 需手動編譯（僅 Python 3.9 有預編譯）
  - 專注生物力學，通用機器人場景較少範例
- **活躍度訊號**：arXiv:2103.16021 論文，2025 年 9 月更新，Stanford 維護
- **與我們的關聯（一句話）**：將物理引擎融入神經網路的開創性工具，適合需要可微分模擬的研究者
- **Link(s)**：https://github.com/keenon/nimblephysics | https://nimblephysics.org/

---

### Jolt Physics

- **Name**：Jolt Physics
- **Type**：Physics Engine
- **Primary language**：English
- **一句話定位**：多核心友好的剛體物理和碰撞檢測庫，被《地平線 西之絕境》和《死亡擱淺 2》採用
- **強項（≤3）**：
  - 遊戲級性能：多執行緒設計，Horizon Forbidden West / Death Stranding 2 驗證
  - 確定性模擬：可透過複製輸入來遠端重現模擬
  - 功能全面：剛體、軟體、布料、車輛、角色控制器、GPU 毛髮模擬
- **弱項/缺口（≤3，可觀察）**：
  - 主要面向遊戲/VR，機器人場景文檔較少
  - 不使用 RTTI/exceptions，需適應其 C++ 風格
  - 無 Python binding（需透過 JoltPhysics.js 或自行封裝）
- **活躍度訊號**：2026 年 1 月持續更新，GDC 2022 演講，多平台支援（Windows/Linux/macOS/iOS/Android/WebAssembly）
- **與我們的關聯（一句話）**：遊戲產業驗證的高性能物理引擎，適合需要極致效能的機器人模擬
- **Link(s)**：https://github.com/jrouwe/JoltPhysics | https://jrouwe.github.io/JoltPhysics/

---

### Project Chrono

- **Name**：Project Chrono
- **Type**：Simulation Platform
- **Primary language**：English
- **一句話定位**：高性能 C++ 多物理與多體動力學模擬庫，支援機器人、車輛、流固耦合與顆粒動力學
- **強項（≤3）**：
  - 多物理覆蓋：剛體 DAE + 變形體 PDE + 顆粒動力學 DVI + 流固耦合
  - 機器人與自駕整合：ROS2 介面、感測器模擬（相機、LiDAR、GPS、IMU）
  - 多語言 API：C++ 核心 + Python (PyChrono) + C# binding
- **弱項/缺口（≤3，可觀察）**：
  - 學習曲線陡峭：功能龐大需要時間掌握
  - 相比 MuJoCo/Isaac 在 RL 社群知名度較低
  - 文檔分散在多個模組
- **活躍度訊號**：v9.0.1 發布，BSD License，Google Groups 論壇活躍，學術和產業廣泛使用
- **與我們的關聯（一句話）**：學術界的多物理模擬重鎮，適合需要超越剛體動力學的進階研究
- **Link(s)**：https://github.com/projectchrono/chrono | https://projectchrono.org/

---

### ProtoMotions

- **Name**：ProtoMotions 3
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：NVIDIA 的 GPU 加速人形機器人訓練框架，專注於大規模動作學習與 sim-to-real
- **強項（≤3）**：
  - 大規模訓練：40+ 小時 AMASS 人類動作數據集，4 顆 A100 只需 12 小時
  - 多模擬器支援：Isaac Gym、Newton (MuJoCo Warp)、Genesis 一鍵切換
  - 一鍵重定向：透過 PyRoki 將 AMASS 動作轉移到任意機器人（H1、G1 等）
- **弱項/缺口（≤3，可觀察）**：
  - 專注人形機器人，其他類型機器人需自行適配
  - 需要高端 GPU（A100 級別最佳）
  - 動作合成模型不包含在開源中
- **活躍度訊號**：2025 年發布，NVIDIA NVlabs 維護，Apache 2.0，持續更新支援 Newton
- **與我們的關聯（一句話）**：人形機器人動作學習的頂級工具，從動畫到實體機器人的橋樑
- **Link(s)**：https://github.com/NVlabs/ProtoMotions | https://protomotions.github.io/

---

### Tinkercad

- **Name**：Tinkercad
- **Type**：Online Tool
- **Primary language**：English（多語言介面）
- **一句話定位**：Autodesk 的免費線上 3D 設計和電路模擬工具，專為初學者和教育設計
- **強項（≤3）**：
  - 零門檻入門：瀏覽器即用，無需安裝，直覺拖放介面
  - 電路模擬整合：Arduino 模擬器可直接測試程式碼
  - 教育生態：Codeblocks 視覺化程式設計、LEGO 積木設計
- **弱項/缺口（≤3，可觀察）**：
  - 功能有限：無法取代專業 CAD（FreeCAD、Fusion 360）
  - 需要網路連線
  - 匯出格式有限制（免費版）
- **活躍度訊號**：Autodesk 維護，教育界廣泛採用，持續更新
- **與我們的關聯（一句話）**：機器人 DIY 入門的最佳起點，從 3D 設計到電路模擬的一站式學習工具
- **Link(s)**：https://www.tinkercad.com/

---

---

### RoboTwin 2.0

- **Name**：RoboTwin 2.0
- **Type**：Simulation Platform / Benchmark
- **Primary language**：English / 中文
- **一句話定位**：CVPR 2025 Highlight，可擴展的雙臂機器人資料生成與 benchmark 框架，支援 50 任務和 731 物件
- **強項（≤3）**：
  - 大規模物件資料集：RoboTwin-OD 147 類別 731 物件（含 SAPIEN PartNet-Mobility 關節物件）
  - MLLM 自動任務生成：使用多模態語言模型自動合成任務程式
  - 完整 Domain Randomization：雜亂物件、背景紋理、光照、桌高、語言指令五維隨機化
- **弱項/缺口（≤3，可觀察）**：
  - 專注雙臂操控，非通用機器人模擬
  - 需要熟悉 SAPIEN 模擬環境
  - 物件資料需從 HuggingFace 下載
- **活躍度訊號**：CVPR 2025 Highlight 論文（arXiv:2504.13059）、ECCV 2024 Workshop Best Paper、第十九屆挑戰杯官方賽題
- **與我們的關聯（一句話）**：雙臂機器人操控研究的前沿 benchmark，適合訓練泛化策略
- **Link(s)**：https://robotwin-platform.github.io/ | https://github.com/TianxingChen/RoboTwin | https://huggingface.co/datasets/TianxingChen/RoboTwin2.0

---

### HoloMotion

- **Name**：HoloMotion
- **Type**：Framework
- **Primary language**：English / 中文
- **一句話定位**：Horizon Robotics 開發的人形機器人全身控制基礎模型，從資料策展到 ROS2 部署的端到端方案
- **強項（≤3）**：
  - 完整 Pipeline：資料策展 → 動作重定向 → 分散式訓練 → 評估 → ROS2 部署
  - 模組化架構：可靈活適配不同機器人形態
  - 清晰路線圖：v1.0 Any Pose → v2.0 Any Command → v3.0 Any Terrain → v4.0 Any Embodiment
- **弱項/缺口（≤3，可觀察）**：
  - 需要 NVIDIA GPU（IsaacLab 依賴）
  - 動作資料需取得 AMASS 授權
  - v1.1 剛發布，生態系統仍在建立
- **活躍度訊號**：v1.1 於 2026-01-06 發布，Apache 2.0 授權，有微信用戶群，GitHub 活躍
- **與我們的關聯（一句話）**：人形機器人全身控制的中國領先開源方案，從模仿到部署的完整框架
- **Link(s)**：https://github.com/HorizonRobotics/HoloMotion

---

### IHMC Open Robotics Software

- **Name**：IHMC Open Robotics Software
- **Type**：Framework / Control Library
- **Primary language**：English
- **一句話定位**：IHMC 開發的 Java 機器人軟體，專注腿式運動演算法與基於動量的控制器，支援世界級人形機器人
- **強項（≤3）**：
  - 真實機器人驗證：驅動 NASA Valkyrie、Nadia、Boardwalk Alex 等人形機器人
  - 完整生態系：Simulation Construction Set、Euclid、Mecano、EtherCAT Master、凸優化庫
  - 軟即時支援：IHMC Realtime 庫使用 RT_PREEMPT 實現 Java 軟即時
- **弱項/缺口（≤3，可觀察）**：
  - Java 生態，非 Python/C++ 主流機器人語言
  - 需要 JDK 17 和 IntelliJ 開發環境
  - macOS 部分支援但不完整
- **活躍度訊號**：持續更新至 2026-01-31，Apache 2.0 授權，有 Atlassian Confluence 公開文檔
- **與我們的關聯（一句話）**：生產級人形機器人控制軟體，了解學術界與產業界如何部署真實人形
- **Link(s)**：https://github.com/ihmcrobotics/ihmc-open-robotics-software | https://ihmcrobotics.atlassian.net/wiki/

---

### FRoM-W1

- **Name**：FRoM-W1
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：OpenMOSS 開發的開源人形機器人全身控制框架，使用自然語言指令生成動作並部署到真實機器人
- **強項（≤3）**：
  - 語言驅動：H-GPT 模組使用 LLM + Chain-of-Thought 理解自然語言並生成動作
  - Sim-to-Real 完整流程：H-ACT 模組進行動作重定向和 RL 微調，部署到 Unitree H1/G1
  - 開源模型：提供 HuggingFace 預訓練模型和 RoboJuDo 部署框架
- **弱項/缺口（≤3，可觀察）**：
  - 需要 Llama-3.1 模型和 AMASS 資料授權
  - 動作資料處理流程較複雜
  - 2026 年新發布，社群規模較小
- **活躍度訊號**：arXiv:2601.12799（2026-01），HuggingFace 模型已發布，GitHub 活躍更新
- **與我們的關聯（一句話）**：語言驅動人形控制的前沿研究，展示 LLM 與機器人控制的整合路徑
- **Link(s)**：https://github.com/OpenMOSS/FRoM-W1 | https://openmoss.github.io/FRoM-W1/

---

### VideoMimic

- **Name**：VideoMimic
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：UC Berkeley 的視覺模仿人形控制框架，從單相機影片重建 3D 環境與人體動作並轉移到機器人
- **強項（≤3）**：
  - Real-to-Sim Pipeline：從影片提取世界座標人體姿態，重建環境為點雲/網格
  - 多階段訓練：動作捕捉預訓練 → 場景條件追蹤 → 蒸餾 → RL 微調
  - CoRL 2025 Best Student Paper：頂級機器人學習會議最佳學生論文獎
- **弱項/缺口（≤3，可觀察）**：
  - 需要大量計算資源進行多階段訓練
  - 影片資料集為 JPEG 序列（非 MP4）
  - Sim-to-Real 部分為初步版本
- **活躍度訊號**：CoRL 2025 Best Student Paper，2025-09-15 公開程式碼，持續更新
- **與我們的關聯（一句話）**：視覺模仿學習的前沿研究，展示如何從網路影片學習機器人技能
- **Link(s)**：https://github.com/hongsukchoi/VideoMimic | https://www.videomimic.net/

---

### trackerLab

- **Name**：trackerLab
- **Type**：Framework
- **Primary language**：English / 中文
- **一句話定位**：基於 IsaacLab 的模組化人形動作重定向、軌跡追蹤與技能控制框架，統一多種控制模式
- **強項（≤3）**：
  - IsaacLab 原生整合：使用 Manager-based 抽象層設計，易於擴展
  - 多控制模式：支援 ex-body pose control、PHC 等多種控制範式
  - FSM 技能圖：使用有限狀態機組合複雜動作行為，支援搖桿/規劃器/手動觸發
- **弱項/缺口（≤3，可觀察）**：
  - 文檔正在更新中（README 標注 not updated）
  - 需要 IsaacLab 完整安裝環境
  - 資產和檢查點需從外部 repo 下載
- **活躍度訊號**：2025-12-31 更新，有完整中英文教程，有微信群支援
- **與我們的關聯（一句話）**：IsaacLab 使用者的人形控制擴展，提供動作追蹤到技能組合的完整流程
- **Link(s)**：https://github.com/Renforce-Dynamics/trackerLab

---

### PHC (Perpetual Humanoid Control)

- **Name**：PHC (Perpetual Humanoid Control)
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：CMU/UC Berkeley 開發的物理人形控制器，實現高保真動作模仿和失敗狀態自動恢復
- **強項（≤3）**：
  - 100% 成功率：PHC+ 模型在 AMASS 11313 序列達到 100% 追蹤成功率
  - 無外部力：不使用任何外部穩定力，純物理模擬
  - 多形態支援：SMPL、SMPLX、Unitree H1/G1 人形機器人，可在 IsaacLab 推論
- **弱項/缺口（≤3，可觀察）**：
  - 座標系與 SMPL 原始不同（負 Z 為重力方向）
  - 需要 Isaac Gym 環境（非 IsaacLab 原生）
  - SMPLSim 需要 Python 3.8
- **活躍度訊號**：ICCV 2023 論文，2025-08-21 更新 IsaacLab 支援，持續維護
- **與我們的關聯（一句話）**：物理人形動作模仿的黃金標準，許多人形控制論文的基礎
- **Link(s)**：https://github.com/ZhengyiLuo/PHC | https://zhengyiluo.github.io/PHC/

---

### HumanoidVerse

- **Name**：HumanoidVerse
- **Type**：Framework
- **Primary language**：English
- **一句話定位**：LeCAR Lab（CMU）開發的多模擬器人形機器人 sim-to-real 學習框架，支援 IsaacGym、IsaacSim、Genesis
- **強項（≤3）**：
  - 多模擬器支援：IsaacGym、IsaacSim、Genesis 一鍵切換，避免模擬器鎖定
  - 模組化設計：模擬器、任務、演算法分離，易於擴展新組合
  - 多形態支援：Unitree H1（10/19 DOF）、G1（12/23 DOF）
- **弱項/缺口（≤3，可觀察）**：
  - 2025-02-04 才公開發布，生態較新
  - 每個模擬器需要獨立環境（避免依賴地獄）
  - Genesis 模擬器部分功能不穩定（錄影）
- **活躍度訊號**：2025-02-04 初次公開，LeCAR Lab 維護（同 ProtoMotions 團隊背景）
- **與我們的關聯（一句話）**：多模擬器人形控制的統一框架，避免單一模擬器綁定的未來選擇
- **Link(s)**：https://github.com/LeCAR-Lab/HumanoidVerse

---

*條目數：55 / 目標：10 ✅*

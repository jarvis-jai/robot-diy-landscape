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
  - LTS 版本 Jetty 支援至 2030 年 9 月
- **弱項/缺口（≤3，可觀察）**：
  - 學習曲線陡峭，需要 SDF/URDF 知識
  - 無中文文件
  - 對硬體要求較高（GPU 加速）
- **活躍度訊號**：Gazebo Jetty LTS (2025-09 ~ 2030-09)，Open Robotics 持續維護
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
  - ROS 1 將於 2026-05-31 EOL，仍有大量舊專案需遷移
  - 安裝配置複雜，對初學者不友善
  - 中文資源有限（Wiki 有 15 語言但中文覆蓋率低）
- **活躍度訊號**：ROSCon 2025 錄影已發布，Kilted Kaiju 最新短期版本
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

*條目數：17 / 目標：10 ✅*

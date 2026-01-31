# 🔩 Hardware - 硬體平台與開發板

硬體平台、開發板、感測器、馬達、機構件。

---

## Schema

```markdown
### [條目名稱]

- **Name**：
- **Type**：Marketplace / Docs / Tool / Open Source Project
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

### Pololu Robotics and Electronics

- **Name**：Pololu
- **Type**：Marketplace / Docs
- **Primary language**：English
- **一句話定位**：專注於機器人與電子零件的線上零售商與製造商，提供馬達驅動、開發板、感測器等
- **強項（≤3）**：
  - 自有品牌產品（Maestro servo controllers, Tic stepper controllers, DRV8825 drivers）
  - 詳細的產品文檔與教學
  - 涵蓋機器人所需的完整零件生態（馬達、輪子、底盤、電源）
- **弱項/缺口（≤3，可觀察）**：
  - 無中文介面
  - 國際運費較高
  - 無社群論壇（僅有支援論壇）
- **活躍度訊號**：官網持續更新產品，YouTube 頻道有 273K+ 觀看的教學影片
- **與我們的關聯（一句話）**：DIY 機器人硬體採購的主要參考來源
- **Link(s)**：https://www.pololu.com

---

### ODrive Robotics

- **Name**：ODrive
- **Type**：Marketplace / Docs / Open Source
- **Primary language**：English
- **一句話定位**：專為機器人設計的高性能 BLDC（無刷直流）馬達控制器，支援精確位置/速度/扭矩控制
- **強項（≤3）**：
  - 高功率輸出（Pro: 3000W continuous, 5kW peak；S1: 1600W continuous）
  - FOC（Field Oriented Control）電流控制，支援雙編碼器
  - 完整生態系（Web GUI、Python/Arduino/ROS2 libraries）
- **弱項/缺口（≤3，可觀察）**：
  - 價格較高（ODrive Pro ~$199, S1 ~$99）
  - 學習曲線較陡（需理解電機控制原理）
  - 無中文文檔
- **活躍度訊號**：Discord 社群活躍，文檔持續更新至 2026
- **與我們的關聯（一句話）**：高性能機器人馬達控制的參考方案
- **Link(s)**：https://odriverobotics.com | https://docs.odriverobotics.com

---

### VESC Project

- **Name**：VESC Project
- **Type**：Open Source / Hardware Design
- **Primary language**：English
- **一句話定位**：開源電動馬達控制器專案，廣泛用於電動滑板、機器人、無人機等
- **強項（≤3）**：
  - 完全開源（硬體設計 + 韌體）
  - 極高彈性，支援從數十瓦到數百千瓦的應用
  - 活躍社群與生態系（多家廠商生產相容硬體）
- **弱項/缺口（≤3，可觀察）**：
  - 需自行組裝或購買第三方硬體
  - 文檔分散，入門門檻較高
  - 主要聚焦電動載具，機器人應用需自行整合
- **活躍度訊號**：官網活躍，社群持續開發新版本
- **與我們的關聯（一句話）**：高功率開源馬達控制的替代方案
- **Link(s)**：https://vesc-project.com

---

### NVIDIA Jetson

- **Name**：NVIDIA Jetson
- **Type**：Marketplace / Docs
- **Primary language**：English
- **一句話定位**：NVIDIA 的 AI 邊緣計算平台，專為機器人、無人機、智慧相機設計
- **強項（≤3）**：
  - 強大的 AI/ML 推論能力（支援 CUDA、TensorRT）
  - 完整的軟體生態（JetPack SDK、Isaac ROS）
  - 產品線豐富（Orin Nano ~$249 到 AGX 系列）
- **弱項/缺口（≤3，可觀察）**：
  - 功耗較 MCU 高（Orin Nano ~7-15W）
  - 學習曲線較陡（需熟悉 Linux、CUDA）
  - 入門價格較高
- **活躍度訊號**：2024-12 發布 Orin Nano Super（70% 性能提升），文檔持續更新
- **與我們的關聯（一句話）**：AI 驅動機器人專案的首選運算平台
- **Link(s)**：https://developer.nvidia.com/embedded | https://www.jetson-ai-lab.com

---

### DYNAMIXEL (Robotis)

- **Name**：DYNAMIXEL
- **Type**：Marketplace / Docs
- **Primary language**：English
- **一句話定位**：Robotis 的智能伺服馬達系列，整合馬達、控制器、驅動、感測器、減速機於一體
- **強項（≤3）**：
  - 一體化設計，降低整合複雜度
  - 多種規格（AX 系列 $57 起，XM 系列專業級）
  - 串接通訊協議，易於控制多軸
- **弱項/缺口（≤3，可觀察）**：
  - 價格較高（MX-28 ~$300+）
  - 專屬協議，需學習 DYNAMIXEL SDK
  - 扭矩重量比不如客製化方案
- **活躍度訊號**：產品線持續更新，官網有完整文檔與 SDK
- **與我們的關聯（一句話）**：快速建構機器人手臂的現成伺服方案
- **Link(s)**：https://www.robotis.us/dynamixel/ | https://emanual.robotis.com

---

### Luxonis OAK (OpenCV AI Kit)

- **Name**：Luxonis OAK
- **Type**：Marketplace / Docs
- **Primary language**：English
- **一句話定位**：結合 AI 邊緣推論與立體深度感測的智能相機平台
- **強項（≤3）**：
  - 板載 AI 推論（48 TOPS、八核 ARM）
  - 高品質立體深度（優於 Intel RealSense）
  - 開源 DepthAI API，支援 PyTorch/TensorFlow/ROS
- **弱項/缺口（≤3，可觀察）**：
  - 價格較高（OAK-D Pro ~$399）
  - 文檔雖完整但分散
  - 生態系相對 Intel RealSense 較新
- **活躍度訊號**：DepthAI 下載超過 250 萬次，Luxonis Hub 持續更新
- **與我們的關聯（一句話）**：機器人視覺感知的現代化解決方案
- **Link(s)**：https://luxonis.com | https://docs.luxonis.com

---

### BCN3D Moveo

- **Name**：BCN3D Moveo
- **Type**：Open Source Project
- **Primary language**：English / Spanish
- **一句話定位**：完全開源的 3D 列印機器人手臂，專為教育用途設計
- **強項（≤3）**：
  - 完全開源（CAD、STL、BOM、韌體）
  - 使用 Arduino 控制，入門友善
  - 專為教育機構設計，有組裝手冊
- **弱項/缺口（≤3，可觀察）**：
  - 2016 年發布後無重大更新
  - 使用 NEMA 17 步進馬達，扭矩有限（~0.6 Nm）
  - 無商業支援，需自行維護
- **活躍度訊號**：GitHub 星星 3.1K+，但最後更新 2018 年
- **與我們的關聯（一句話）**：入門級開源機器人手臂的經典參考設計
- **Link(s)**：https://github.com/BCN3D/BCN3D-Moveo | https://bcn3d.com/bcn3d-moveo-the-future-of-learning-robotic-arm/

---

### ARCTOS Robotics

- **Name**：ARCTOS
- **Type**：Marketplace / Open Source Project
- **Primary language**：English
- **一句話定位**：現代化的開源 3D 列印六軸機器人手臂，支援 AI 與各種軟體整合
- **強項（≤3）**：
  - 完整套件（硬體 + 軟體 + AI 整合）
  - 支援 ROS/ROS2、RoboDK、Isaac Sim
  - 活躍開發，有商業支援（套件 $231 起）
- **弱項/缺口（≤3，可觀察）**：
  - 負載能力有限（1 kg）
  - 需要 200×200mm 以上的 3D 列印機
  - 精度受限於 3D 列印結構
- **活躍度訊號**：Arctos Studio 持續更新至 v2.5，Discord 社群活躍
- **與我們的關聯（一句話）**：現代開源機器人手臂的最佳參考之一
- **Link(s)**：https://arctosrobotics.com | https://github.com/arctos-robotics

---

### SCUTTLE Robot

- **Name**：SCUTTLE
- **Type**：Open Source Project / Docs
- **Primary language**：English
- **一句話定位**：模組化開源移動機器人平台，源自 Texas A&M 的教學專案
- **強項（≤3）**：
  - 零製造需求，使用全球可購買的標準零件
  - 完整課程教材（感測器、機械設計、軟體、IoT）
  - 強大自主能力與網路連接
- **弱項/缺口（≤3，可觀察）**：
  - 主要面向教育，非商業級
  - 社群規模較小
  - 文檔分散於多個網站
- **活躍度訊號**：官網持續維護，有全球學術機構與愛好者社群
- **與我們的關聯（一句話）**：低成本移動機器人教學平台的參考設計
- **Link(s)**：https://www.scuttlerobot.org

---

*條目數：9 / 目標：15*

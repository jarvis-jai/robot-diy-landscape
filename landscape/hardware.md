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
  - 完整的軟體生態（JetPack SDK、Isaac ROS、VPI 視覺處理介面）
  - 產品線豐富（Orin Nano ~$249 到 AGX 系列，新增 Thor 系列）
- **弱項/缺口（≤3，可觀察）**：
  - 功耗較 MCU 高（Orin Nano ~7-15W）
  - 學習曲線較陡（需熟悉 Linux、CUDA）
  - 入門價格較高
- **活躍度訊號**：2024-12 發布 Orin Nano Super（70% 性能提升），2025 年發布 Jetson Thor 系列（Blackwell 架構，最高 2070 TFLOPS）
- **與我們的關聯（一句話）**：AI 驅動機器人專案的首選運算平台
- **Link(s)**：https://developer.nvidia.com/embedded | https://www.jetson-ai-lab.com

> **補強 2026-01-31**：新增 Jetson Thor 系列資訊。Thor 系列採用 NVIDIA Blackwell 架構 GPU，內建專用加速器（PVA 可編程視覺加速器、OFA 光流加速器、VIC 視頻影像合成器），針對機器人視覺感知優化。Thor T5000 可支援 8 個立體相機 30FPS 運行，比 Orin AGX 64GB 快約 10 倍，適合多感測器融合的進階機器人應用。

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

---

### SLAMTEC RPLIDAR

- **Name**：SLAMTEC RPLIDAR
- **Type**：Marketplace / Docs
- **Primary language**：English / Chinese
- **一句話定位**：專為服務機器人設計的 360 度雷射雷達感測器系列，是 DIY 機器人導航的標準選擇
- **強項（≤3）**：
  - 產品線豐富（A1 入門款 ~$105，A2 主流款 ~$320，A3 高階款 25m 範圍）
  - OPTMAG 無接觸傳動技術，壽命達 5 年以上
  - 完整 SDK 支援 ROS/ROS2、Arduino、Raspberry Pi
- **弱項/缺口（≤3，可觀察）**：
  - A1 入門款在強光戶外環境性能受限
  - 需要穩定供電（5V 2A）
  - 機械旋轉結構，相比固態 LiDAR 體積較大
- **活躍度訊號**：2025 年持續發布新產品（Aurora S、S3 SL-Dtof），GitHub SDK 活躍維護
- **與我們的關聯（一句話）**：DIY 移動機器人 SLAM 導航的首選 LiDAR
- **Link(s)**：https://www.slamtec.com | https://github.com/slamtec

---

### Intel RealSense D400 Series

- **Name**：Intel RealSense D400
- **Type**：Marketplace / Docs
- **Primary language**：English
- **一句話定位**：Intel 的立體深度相機系列，廣泛用於機器人視覺、3D 掃描、手勢識別
- **強項（≤3）**：
  - 成熟的 SDK（librealsense），支援 Python/C++/ROS/ROS2
  - 產品線覆蓋多種需求（D435 通用、D455 長距離、D457 工業級 IP65）
  - 深度 + RGB + IMU 整合，適合視覺 SLAM
- **弱項/缺口（≤3，可觀察）**：
  - LiDAR 和 Tracking 產品線已於 2024 年 5 月停產（L515、T265）
  - 戶外強光環境深度精度下降
  - 價格較高（D435 ~$350，D455 ~$500）
- **活躍度訊號**：librealsense GitHub 11K+ stars，D457 工業版本 2022 年發布
- **與我們的關聯（一句話）**：機器人 RGB-D 視覺感知的主流選擇
- **Link(s)**：https://www.intelrealsense.com | https://github.com/IntelRealSense/librealsense

---

### Hiwonder IM10A IMU Module

- **Name**：Hiwonder IM10A
- **Type**：Marketplace / Docs
- **Primary language**：English / Chinese
- **一句話定位**：10 軸 AHRS 慣性導航模組，專為 ROS 機器人設計，支援多種通訊介面
- **強項（≤3）**：
  - 10 軸感測器（3 軸陀螺儀 + 3 軸加速度計 + 3 軸磁力計 + 氣壓計）
  - 支援 USB/UART/I2C 通訊，兼容 Raspberry Pi、STM32、Jetson
  - 提供 ROS1/ROS2 package 與完整教學文件
- **弱項/缺口（≤3，可觀察）**：
  - 價格中等（$79.99 起）
  - 需校準磁力計以獲得準確航向
  - 文檔主要透過 Google Drive 分享，不夠系統化
- **活躍度訊號**：產品持續銷售，Q&A 區活躍回覆 ROS2 相關問題
- **與我們的關聯（一句話）**：DIY 機器人姿態感測的性價比選擇
- **Link(s)**：https://www.hiwonder.com/products/imu-module

---

### Benewake TFmini Series

- **Name**：Benewake TFmini
- **Type**：Marketplace / Docs
- **Primary language**：English / Chinese
- **一句話定位**：小型低成本 ToF 雷射測距感測器，適用於無人機、機器人避障、液位偵測
- **強項（≤3）**：
  - 極致小型化與低功耗（TFmini-S 僅 5g，功耗 <1W）
  - 產品線豐富（TFmini-S $40、TFmini Plus $50、TFmini-i $72 帶 CAN/RS485）
  - 高幀率（最高 1000Hz），適合動態場景
- **弱項/缺口（≤3，可觀察）**：
  - 單點測距，非 360 度掃描
  - 戶外範圍較短（室內 12m，戶外 7m）
  - FOV 僅 2 度，需配合雲台或多感測器使用
- **活躍度訊號**：Arduino/PX4/ArduPilot 官方支援，DroneBot Workshop 有教學文章
- **與我們的關聯（一句話）**：低成本機器人避障與測距的入門選擇
- **Link(s)**：https://en.benewake.com | https://ozrobotics.com/product-tag/diy-robot-lidar-sensor/

---

### Raspberry Pi Pico / RP2040

- **Name**：Raspberry Pi Pico
- **Type**：Marketplace / Docs
- **Primary language**：English
- **一句話定位**：Raspberry Pi 基金會的首款微控制器開發板，基於自研 RP2040 晶片
- **強項（≤3）**：
  - 極低價格（Pico $4，Pico W 帶 Wi-Fi $6）
  - 雙核 ARM Cortex-M0+ @ 133MHz，264KB RAM
  - 獨特的 PIO（Programmable I/O）功能，支援自定義協議
- **弱項/缺口（≤3，可觀察）**：
  - 無內建 Wi-Fi/藍牙（需 Pico W 版本）
  - Flash 僅 2MB，較 ESP32 少
  - ROS/micro-ROS 支援不如 ESP32 成熟
- **活躍度訊號**：2024 年發布 RP2350（Pico 2），MicroPython/CircuitPython 官方支援
- **與我們的關聯（一句話）**：入門級機器人控制器的超低成本選擇
- **Link(s)**：https://www.raspberrypi.com/products/raspberry-pi-pico/ | https://datasheets.raspberrypi.com/pico/pico-datasheet.pdf

---

### ESP32 (Espressif Systems)

- **Name**：ESP32
- **Type**：Docs / Marketplace
- **Primary language**：English / Chinese
- **一句話定位**：Espressif 的高性價比 Wi-Fi + 藍牙 SoC，是 IoT 和機器人專案的熱門選擇
- **強項（≤3）**：
  - 內建 Wi-Fi + 藍牙，價格極低（開發板 $5-15）
  - 520KB SRAM，雙核 240MHz，豐富的 GPIO
  - 生態系龐大：ESP-IDF、Arduino、MicroPython、micro-ROS
- **弱項/缺口（≤3，可觀察）**：
  - 功耗較 STM32 高（深度睡眠仍需 ~10μA）
  - ADC 精度較差（非線性）
  - 學習曲線：ESP-IDF 較 Arduino 複雜
- **活躍度訊號**：2025 年持續發布新型號（ESP32-C6、S3），GitHub esp-idf 13K+ stars
- **與我們的關聯（一句話）**：需要無線連接的 DIY 機器人首選控制器
- **Link(s)**：https://www.espressif.com/en/products/socs/esp32 | https://docs.espressif.com

---

### STM32 (STMicroelectronics)

- **Name**：STM32
- **Type**：Docs / Marketplace
- **Primary language**：English
- **一句話定位**：ST 的 ARM Cortex-M 微控制器系列，廣泛用於工業和專業機器人應用
- **強項（≤3）**：
  - 產品線極廣（從 Cortex-M0 到 M7，價格 $1-20）
  - 工業級可靠性，完整的開發工具鏈（STM32CubeIDE、CubeMX）
  - 豐富的周邊：ADC、DAC、定時器、CAN、FDCAN
- **弱項/缺口（≤3，可觀察）**：
  - 入門門檻較高（需理解 HAL/LL 層）
  - 無內建 Wi-Fi/藍牙（需外接模組）
  - 官方開發板（Nucleo、Discovery）價格較 ESP32/Pico 高
- **活躍度訊號**：STM32CubeIDE 持續更新，Nucleo 板廣泛用於機器人教育
- **與我們的關聯（一句話）**：需要即時控制和工業可靠性的機器人進階選擇
- **Link(s)**：https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html | https://github.com/STMicroelectronics

---

### Arduino Nano 33 BLE Sense

- **Name**：Arduino Nano 33 BLE Sense
- **Type**：Marketplace / Docs
- **Primary language**：English
- **一句話定位**：Arduino 的進階開發板，整合 BLE 和多種感測器，適合 TinyML 和機器人感知
- **強項（≤3）**：
  - 內建 9 軸 IMU、溫濕度、氣壓、光線、麥克風、手勢感測器
  - 支援 TensorFlow Lite for Microcontrollers，適合邊緣 AI
  - nRF52840 晶片，支援 BLE 5.0
- **弱項/缺口（≤3，可觀察）**：
  - 無 Wi-Fi（需配合其他模組）
  - 價格較高（~$35）
  - 3.3V 邏輯電平，部分周邊需電平轉換
- **活躍度訊號**：2023 年發布 Rev2 版本，Arduino ML 文檔持續更新
- **與我們的關聯（一句話）**：適合感測器融合和邊緣 AI 的機器人開發板
- **Link(s)**：https://store.arduino.cc/products/arduino-nano-33-ble-sense | https://docs.arduino.cc/hardware/nano-33-ble-sense

---

---

### Thor Robot Arm

- **Name**：Thor
- **Type**：Open Source Project
- **Primary language**：English / Spanish
- **一句話定位**：活躍維護的開源 3D 列印六軸機器人手臂，設計用於教育和愛好者
- **強項（≤3）**：
  - 完全開源（FreeCAD、KiCAD 源文件），CC-BY-SA-4.0 授權
  - 低成本（<€350 硬體成本），高度 625mm，負載 750g
  - 支援 ROS 2 / MoveIt 2，有活躍的 Discord 社群
- **弱項/缺口（≤3，可觀察）**：
  - 需要 3D 列印機和基本機電經驗
  - 精度受限於 3D 列印結構
  - 主要為個人維護者專案（AngelLM）
- **活躍度訊號**：GitHub 1.4K+ stars，v2.1 版本於 2023-09 發布，Discord 社群活躍
- **與我們的關聯（一句話）**：BCN3D Moveo 的現代替代方案，展示開源機器人手臂可以持續維護
- **Link(s)**：https://github.com/AngelLM/Thor | http://thor.angel-lm.com/

---

### SO-ARM100/SO-101

- **Name**：SO-ARM100 / SO-101
- **Type**：Open Source Project / Kit
- **Primary language**：English / Chinese
- **一句話定位**：The Robot Studio 與 Hugging Face 合作設計的標準開放機器人手臂，專為 LeRobot 整合
- **強項（≤3）**：
  - 設計用於 LeRobot 整合，支援模仿學習和 VLA 模型訓練
  - 全球多家供應商（Seeed Studio、淘寶、Alibaba），價格約 $230
  - 完整的組裝指南和 HuggingFace 教程
- **弱項/缺口（≤3，可觀察）**：
  - 需要 3D 列印（或購買套件）
  - 主要為遙操作和學習用途，非工業精度
  - 較新的設計，社群仍在成長中
- **活躍度訊號**：SO-101 為最新版本，與 LeRobot 同步更新，Discord 社群活躍
- **與我們的關聯（一句話）**：AI 驅動機器人學習的入門硬體，展示開源硬體與 AI 框架的整合
- **Link(s)**：https://github.com/TheRobotStudio/SO-ARM100 | https://huggingface.co/docs/lerobot/so101

---

*條目數：19 / 目標：15 ✅*

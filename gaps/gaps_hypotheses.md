# 🔍 Gaps Hypotheses - 缺口假說

> ⚠️ 本文件內容皆為**推論**，非事實。每條假說需 ≥2 佐證來源。

---

## 假說格式

```markdown
### Gap Hypothesis #N：[簡短標題]

- **推論**：[完整描述這個缺口是什麼]
- **目標使用者**：[誰會受此缺口影響]
- **佐證 1**：[來源 A] - [說明為何支持此推論]
- **佐證 2**：[來源 B] - [說明為何支持此推論]
- **反證/風險**：[如有發現反面證據，記錄於此]
- **信心度**：高 / 中 / 低
- **相關 landscape 條目**：[連結到相關的 landscape 條目]
```

---

## 假說列表

### Gap Hypothesis #1：中文圈缺乏進階機器人系統級教程（ROS 2、SLAM、Motion Planning）

- **推論**：中文機器人 DIY 資源高度集中於入門級別（Arduino、ESP32 基礎），但進階到 ROS 2、SLAM 導航、運動規劃等系統級技術時，幾乎完全缺乏中文教程，形成嚴重的學習斷層。
- **目標使用者**：已掌握 Arduino/ESP32 基礎、想進階到自主移動機器人或機械臂系統的中文圈學習者
- **佐證 1**：[ROS 2 Documentation](../landscape/learning.md#ros-2-documentation) - 明確標註「無中文介面或官方中文翻譯」，且「學習曲線較 ROS 1 陡峭」
- **佐證 2**：[太極創客](../landscape/chinese_ecosystem.md#太極創客) - 中文圈最完整的入門平台，但明確指出「偏向入門級別，缺乏進階機器人項目（如 ROS）」
- **佐證 3**：[micro-ROS](../landscape/toolchains.md#micro-ros) - 將 ROS 2 帶到微控制器的關鍵橋接技術，但「中文資源極少」
- **佐證 4**：[MoveIt](../landscape/toolchains.md#moveit) - 機器人運動規劃事實標準，文件「以研究人員為主要對象」，無中文版本
- **反證/風險**：The Construct 有日文、西班牙文 ROS 教程，未來可能擴展至中文；稚暉君的開源專案有中文文檔但屬個人貢獻
- **信心度**：高
- **相關 landscape 條目**：learning.md#ros-2-documentation, chinese_ecosystem.md#太極創客, toolchains.md#micro-ros, toolchains.md#moveit, toolchains.md#gazebo

---

### Gap Hypothesis #2：從入門套件到進階開源專案的過渡鴻溝

- **推論**：機器人 DIY 生態存在明顯的「中間地帶空白」——入門套件（15分鐘組裝、Scratch 編程）與進階開源專案（需要 3D 列印機、ROS 知識、機械設計經驗）之間，缺乏引導式的過渡路徑和中階產品。
- **目標使用者**：已完成入門套件學習、想進一步挑戰但尚未具備完整工程能力的愛好者
- **佐證 1**：[Makeblock mBot](../landscape/kits.md#makeblock-mbot) - 定位「15 分鐘快速組裝」的入門標竿，但「基本套件功能有限，需額外購買擴充模組」，且「在非平滑地面行駛困難」
- **佐證 2**：[TurtleBot 4](../landscape/kits.md#turtlebot-4) - 另一端的「官方 ROS 學習平台」，但「需要 ROS 基礎知識，學習曲線陡峭」，且「主要面向機構和研究人員，非個人愛好者」
- **佐證 3**：[ARCTOS Robotics](../landscape/hardware.md#arctos-robotics) - 現代開源機器人手臂，但「需要 200×200mm 以上的 3D 列印機」、「入門門檻高，需要一定機械和電子經驗」
- **佐證 4**：[BCN3D Moveo](../landscape/hardware.md#bcn3d-moveo) - 經典教育機器人手臂，但「2016 年發布後無重大更新」、「無商業支援，需自行維護」
- **反證/風險**：Petoi Bittle 嘗試填補此缺口（開源四足、$269 價位），但仍需「一定技術基礎」；Elegoo Smart Car 也試圖作為中階產品
- **信心度**：高
- **相關 landscape 條目**：kits.md#makeblock-mbot, kits.md#turtlebot-4, hardware.md#arctos-robotics, hardware.md#bcn3d-moveo, kits.md#petoi-bittle

---

### Gap Hypothesis #3：AI 視覺與機器人整合的系統化教程稀缺

- **推論**：儘管 AI 視覺硬體（Jetson、OAK Camera、RealSense）已經成熟且價格可及，但將這些硬體整合到完整機器人系統的教程高度碎片化，缺乏從「開箱到部署」的系統化指南。
- **目標使用者**：想為機器人加入物體辨識、人臉追蹤、SLAM 導航等 AI 能力的 DIY 愛好者
- **佐證 1**：[Luxonis OAK](../landscape/hardware.md#luxonis-oak-opencv-ai-kit) - 優質的 AI 深度相機，但「文檔雖完整但分散」、「生態系相對 Intel RealSense 較新」
- **佐證 2**：[NVIDIA Jetson](../landscape/hardware.md#nvidia-jetson) - 強大的 AI 平台，但「學習曲線較陡（需熟悉 Linux、CUDA）」、「入門價格較高」
- **佐證 3**：[NVIDIA DLI](../landscape/learning.md#nvidia-deep-learning-institute) - 官方培訓資源，但「完整課程和認證需付費（$125-$400）」、「無中文課程」
- **佐證 4**：[SunFounder PiCar-X](../landscape/kits.md#sunfounder-picar-x) - 包含 AI 功能的套件，但「AI 功能需要較高學習曲線」、「需另購 Raspberry Pi（增加總成本）」
- **反證/風險**：Automatic Addison 提供高品質 ROS 2 教程，包含感測器整合；Josh Newans (Articulated Robotics) 也有相關內容
- **信心度**：中
- **相關 landscape 條目**：hardware.md#luxonis-oak, hardware.md#nvidia-jetson, learning.md#nvidia-dli, kits.md#sunfounder-picar-x

---

### Gap Hypothesis #4：繁體中文機器人 DIY 資源嚴重不足

- **推論**：相較於簡體中文圈（有太極創客、稚暉君、DF創客社區等），繁體中文圈（台灣、港澳）的機器人 DIY 資源極度匱乏——社群依賴 Facebook（歷史不可搜尋）、媒體更新緩慢、創作者影響力有限。
- **目標使用者**：偏好繁體中文介面的台灣、香港、澳門機器人 DIY 愛好者
- **佐證 1**：[Arduino.Taipei](../landscape/chinese_ecosystem.md#arduinotaipei) - 台灣最大 Arduino 社群（4.7萬成員），但「Facebook 平台限制，歷史帖文不易搜尋」、「無獨立論壇或網站」、「偏向通用 Arduino 討論，專門機器人話題較少」
- **佐證 2**：[MakerPRO](../landscape/chinese_ecosystem.md#makerpro) - 台灣創客媒體，但「近年更新頻率下降」、「實作教程深度有限」、「社群論壇活躍度有限」
- **佐證 3**：[夜市小霸王 AIoT 教學頻道](../landscape/chinese_ecosystem.md#夜市小霸王-aiot-教學頻道) - 唯一找到的繁中 YouTube 創作者，但「訂閱數較少（觀看次數 5,000+），影響力有限」、「機器人專題較少，偏向通用開發板教學」
- **佐證 4**：[vMaker 台灣自造者](../landscape/chinese_ecosystem.md#vmaker-台灣自造者) - 創客新聞平台，但「偏向新聞報導，缺乏深入技術教程」、「無社群論壇功能」
- **反證/風險**：台灣有 Fablab Taipei、中研院創客實驗室等實體空間，可能有未被收錄的本地資源；學校課程和 Maker Faire Taipei 等活動也是資源來源
- **信心度**：高
- **相關 landscape 條目**：chinese_ecosystem.md#arduinotaipei, chinese_ecosystem.md#makerpro, chinese_ecosystem.md#夜市小霸王-aiot-教學頻道, chinese_ecosystem.md#vmaker-台灣自造者

---

### Gap Hypothesis #5：感測器（LiDAR/IMU/深度相機）與 ROS 2 整合的完整教程缺乏

- **推論**：DIY 機器人常用的感測器（RPLIDAR、RealSense、IMU 模組）各自有文檔，但將它們整合到 ROS 2 系統並實現功能（SLAM、定位、避障）的完整教程分散且不連貫，尤其是針對最新 ROS 2 版本（Jazzy/Kilted）的更新嚴重滯後。
- **目標使用者**：想為自建移動機器人加入感測器並實現自主導航的 DIY 愛好者
- **佐證 1**：[SLAMTEC RPLIDAR](../landscape/hardware.md#slamtec-rplidar) - DIY 機器人 LiDAR 標準選擇，「完整 SDK 支援 ROS/ROS2」，但實際整合教程分散於不同來源
- **佐證 2**：[Intel RealSense D400](../landscape/hardware.md#intel-realsense-d400-series) - 主流深度相機，「成熟的 SDK（librealsense）」，但「LiDAR 和 Tracking 產品線已於 2024 年 5 月停產」，生態系正在變動
- **佐證 3**：[Hiwonder IM10A IMU](../landscape/hardware.md#hiwonder-im10a-imu-module) - 專為 ROS 設計的 IMU，「提供 ROS1/ROS2 package」，但「文檔主要透過 Google Drive 分享，不夠系統化」
- **佐證 4**：[ROBOTIS e-Manual](../landscape/learning.md#robotis-e-manual) - TurtleBot3 官方文檔，「ROS 2 Humble/Jazzy 支援計畫（2025 Q1-Q2）」——說明即使官方文檔也在追趕最新版本
- **反證/風險**：Automatic Addison 和 Articulated Robotics 有持續更新的 ROS 2 感測器教程；Nav2 官方文檔也在改善
- **信心度**：中
- **相關 landscape 條目**：hardware.md#slamtec-rplidar, hardware.md#intel-realsense-d400, hardware.md#hiwonder-im10a, learning.md#robotis-e-manual

---

## 綜合觀察

從以上五條假說可以看出幾個共同主題：

1. **語言障礙**：#1 和 #4 都指向非英語資源的缺乏，中文圈（尤其繁體中文）的進階資源嚴重不足
2. **複雜度階梯斷裂**：#2 指出入門與進階之間的「中間地帶空白」
3. **整合教程稀缺**：#3 和 #5 都是關於「將多個技術整合到完整系統」的教程缺乏

這些觀察可能指向潛在的市場切入點（見 opportunity_wedges.md）。

---

*假說數：5 / 目標：10*
*最後更新：2026-01-31（第 14 輪 gaps）*

# Wedge #2 Community Launch Kit — 社群發文準備

> 建立日期：2026-01-31
> 目的：準備 Sim-to-Real Checklist v1.0 的社群發布測試

---

## 📋 發布策略概覽

### 目標
- 驗證 Checklist 對社群的價值
- 收集反饋以改進 v2
- 建立初始認知度和 star 數

### 發布管道（按優先級）

| 管道 | 受眾規模 | 適配度 | 優先級 | 備註 |
|------|----------|--------|--------|------|
| r/ROS | 34K | ⭐⭐⭐⭐⭐ | P1 | 最相關，規則友善 |
| r/robotics | 315K | ⭐⭐⭐⭐ | P1 | 大流量，需高品質 |
| ROS Discourse | ~10K | ⭐⭐⭐⭐⭐ | P2 | 官方論壇 |
| Hacker News | — | ⭐⭐⭐ | P2 | Show HN 格式 |
| Open Robotics Discord | ~5K | ⭐⭐⭐⭐ | P3 | 社群互動 |

---

## 🔴 Reddit 發文草稿

### r/ROS 版本

**標題選項**（A/B 測試）：
- A: `[Resource] Sim-to-Real Checklist v1.0 — 30+ things to check before deploying your robot`
- B: `After failing my first 5 sim-to-real deployments, I compiled this checklist`
- C: `Open-sourcing my Sim-to-Real Deployment Checklist (ROS 2, Gazebo → real robot)`

**推薦**：Option B（個人故事 + 價值）或 C（明確開源）

---

**發文內容**：

```markdown
# Sim-to-Real Checklist v1.0 — Deployment Pre-flight for ROS 2 Robots

After spending way too many hours debugging why my perfectly working Gazebo simulation crashed on real hardware, I started documenting every lesson learned. This turned into a structured checklist that I'm now open-sourcing.

## What it covers

The checklist has 30+ items across 7 categories:

1. **Sensor Calibration** — LiDAR angles, IMU drift, encoder PPR, depth camera settings
2. **Mechanical Differences** — Mass/inertia, friction, backlash, 3D print tolerance
3. **Control System Tuning** — PID re-tuning, control frequency, safety limits
4. **Communication & Latency** — ROS_DOMAIN_ID, network timing, TF publishing
5. **Power Management** — Battery voltage, peak current, thermal monitoring
6. **Coordinate Frames & TF** — URDF updates, sensor offsets, TF tree validation
7. **Software Versions** — ROS distro, driver versions, hardcoded simulation values

Plus a section on **5 common failure modes** with solutions:
- LiDAR perfect in sim, robot crashes into walls
- Control loop drops from 100Hz to 30Hz on real hardware
- Perfect SLAM map starts drifting in real world
- Power issues causing erratic behavior
- Coordinate system confusion causing inverted movement

## Link

GitHub: [link to repo]

The checklist is in Markdown for easy collaboration. PRs welcome — especially if you have war stories to add!

## Questions for the community

1. What's the most painful sim-to-real gotcha you've encountered?
2. Any obvious items missing from the checklist?
3. Would a companion video walkthrough be useful?

---

*Disclosure: This is part of a larger robotics DIY landscape research project. No commercial intent — just trying to give back to the community.*
```

---

### r/robotics 版本

**標題**：`Sim-to-Real Deployment Checklist v1.0 — Lessons learned from debugging real robots`

**注意**：r/robotics 規則更嚴格，需要更專業的語調

```markdown
# Sim-to-Real Deployment Checklist — Open-sourced

I've compiled a structured pre-deployment checklist for transitioning robot projects from simulation (Gazebo/Isaac Sim/Webots) to physical hardware.

## Why this exists

The gap between a working simulation and a working physical robot is consistently underestimated. Issues like sensor calibration drift, control frequency drops on embedded hardware, power fluctuations, and coordinate frame mismatches are rarely covered in tutorials.

## Content overview

**7 Categories, 30+ Checkpoints:**

| Category | Examples |
|----------|----------|
| Sensor Calibration | LiDAR FOV, IMU static calibration, encoder PPR |
| Mechanical | Mass/inertia, friction coefficients, backlash compensation |
| Control | PID retuning, real-time priorities, safety limits |
| Communication | Network latency, TF publishing rates, time sync |
| Power | Voltage sag, peak current, thermal throttling |
| TF/Frames | URDF accuracy, sensor offsets, TF tree validation |
| Software | Version pinning, driver compatibility, hardcoded values |

Additionally, there are 5 documented failure patterns with diagnostic approaches.

## Resource

GitHub: [link]

Format: Markdown (PRs welcome)

## Discussion

What sim-to-real issues have you encountered that aren't commonly discussed?
```

---

## 🟠 Hacker News Show HN 草稿

**標題**：`Show HN: Sim-to-Real Checklist – Open-source deployment guide for ROS robots`

**注意**：HN 需要簡潔，30 字限制

```markdown
I open-sourced a checklist for deploying simulated robots to real hardware.

After multiple failed attempts moving ROS 2 projects from Gazebo to physical robots, I documented every debugging lesson. The result is a 30+ item checklist covering sensors, controls, power, TF frames, and common failure modes.

The checklist is intentionally "failure-oriented" — it focuses on what goes wrong rather than what should go right. Most tutorials teach you how to run a simulation; few teach you why the same code fails on real hardware.

Categories covered:
- Sensor calibration (LiDAR, IMU, depth cameras, encoders)
- Mechanical differences (mass, friction, backlash)
- Control tuning (PID, frequency, safety)
- Communication (latency, time sync)
- Power management
- Coordinate frames

GitHub link: [link]

I'd appreciate feedback on:
1. Missing items from your experience
2. Interest level in a "common failures" video series
```

---

## 🟢 ROS Discourse 草稿

**類別建議**：`General` 或 `Navigation`

**標題**：`[Community Resource] Sim-to-Real Deployment Checklist v1.0`

```markdown
Hi all,

I'm sharing an open-source checklist I developed for transitioning ROS 2 projects from simulation to physical deployment.

**Background:** After working through multiple sim-to-real transitions, I noticed the same issues recurring: sensor misconfiguration, control frequency drops, power problems, TF mismatches. Existing documentation tends to assume the simulation "just works" on real hardware.

**What the checklist covers:**
- 7 categories (sensors, mechanics, controls, comms, power, TF, software)
- 30+ checkpoint items
- 5 common failure patterns with solutions
- Self-assessment table for "sim-to-real gap" severity

**Link:** [GitHub]

**Request:** 
If you have sim-to-real war stories or suggestions for additional checklist items, please share or submit a PR!

This is part of a broader effort to document robotics DIY resources. All content is MIT licensed.
```

---

## 📊 發布時機建議

### Reddit 最佳發文時間（美國時間）
- **最佳**：週二-週四 上午 9-11 AM EST
- **次佳**：週一 上午、週五 中午前
- **避免**：週末、深夜

### 發布順序建議
1. **Day 1**：先發 r/ROS（小但精準的受眾，測試反應）
2. **Day 2-3**：根據 r/ROS 反饋調整後發 r/robotics
3. **Day 3-4**：發 ROS Discourse
4. **Day 5+**：如反應正面，發 Show HN

---

## ✅ 發布前檢查清單

### 內容準備
- [ ] Checklist 上傳到公開 GitHub repo
- [ ] README 清楚說明用途和授權
- [ ] 確認無拼字錯誤
- [ ] 確認連結可用

### 帳號準備
- [ ] Reddit 帳號 karma 足夠（建議 >100）
- [ ] 帳號有 r/ROS、r/robotics 歷史參與
- [ ] HN 帳號有一定年齡

### 發布後
- [ ] 監控評論，及時回覆
- [ ] 記錄 upvotes/comments 數據
- [ ] 整理反饋到 v2 改進清單

---

## 📈 成功指標

| 指標 | 最低門檻 | 目標 |
|------|----------|------|
| r/ROS upvotes | 10+ | 50+ |
| r/robotics upvotes | 20+ | 100+ |
| GitHub stars | 50+ | 200+ |
| 有價值的評論 | 3+ | 10+ |
| 被其他資源引用 | 1+ | 3+ |

---

## 🔄 反饋整理模板

發布後使用此格式整理反饋：

```markdown
## Community Feedback Summary — [Date]

### Positive Reception
- ...

### Suggested Additions
- [ ] [Item] — suggested by [user]

### Criticisms/Concerns
- ...

### v2 Action Items
- [ ] Add: ...
- [ ] Revise: ...
- [ ] Remove: ...
```

---

*此文件為 Wedge #2 社群驗證的執行計畫。*
*最後更新：2026-01-31*

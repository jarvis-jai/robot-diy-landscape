# Sim-to-Real Checklist 🤖→🔧

> A structured pre-deployment checklist for transitioning robot projects from simulation to physical hardware.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

---

## Why This Exists

The gap between "works in simulation" and "works on real hardware" is consistently underestimated. After debugging multiple sim-to-real failures, I compiled every lesson into a structured checklist.

**This checklist helps you:**
- 🔍 Systematically identify potential issues before deployment
- ⚠️ Understand common failure modes and their solutions
- ✅ Validate your robot is ready for the real world

## Quick Start

1. Complete your simulation testing
2. Open [`CHECKLIST.md`](./CHECKLIST.md)
3. Work through each category before powering on your robot
4. Use the self-assessment table to evaluate your readiness

## What's Covered

| Category | Items | Key Topics |
|----------|-------|------------|
| 🔴 Sensor Calibration | 12 | LiDAR, IMU, depth camera, encoders |
| 🟠 Mechanical Differences | 9 | Mass, friction, backlash, tolerances |
| 🟡 Control System | 8 | PID tuning, frequency, safety limits |
| 🟢 Communication | 8 | Network, time sync, latency |
| 🔵 Power Management | 8 | Battery, current, thermal |
| 🟣 Coordinate Frames | 5 | URDF, TF tree, sensor offsets |
| ⚪ Software Versions | 6 | ROS, drivers, dependencies |

**Plus:** 5 documented failure patterns with diagnostic approaches

## Common Failure Modes

The checklist includes solutions for these frequent issues:

1. **"LiDAR works in sim, robot crashes into walls"** — Material reflectivity, minimum range, transparent objects
2. **"Control loop drops from 100Hz to 30Hz"** — CPU load, real-time priorities, callback optimization
3. **"Perfect SLAM map starts drifting"** — IMU calibration, wheel slip, sensor fusion
4. **"Random behavior after 10 minutes"** — Voltage sag, peak current, thermal throttling
5. **"Robot moves in wrong direction"** — Frame conventions, TF errors, left/right hand

## Supported Platforms

Tested with:
- **Simulators:** Gazebo, Isaac Sim, Webots
- **ROS Versions:** ROS 2 Jazzy, Iron, Humble
- **Hardware:** Custom wheeled robots, TurtleBot-style platforms

Concepts apply broadly to any ROS-based system.

## Contributing

Found something missing? Had a painful sim-to-real experience?

1. Fork this repo
2. Add your item to the relevant section in `CHECKLIST.md`
3. Include context/rationale
4. Submit a PR

All contributions welcome!

## Related Resources

- [Nav2 Documentation](https://docs.nav2.org/) — ROS 2 navigation stack
- [Isaac Lab](https://github.com/isaac-sim/IsaacLab) — GPU-accelerated robot learning
- [LeRobot](https://github.com/huggingface/lerobot) — End-to-end robot learning
- [Articulated Robotics](https://articulatedrobotics.xyz/) — ROS 2 tutorials

## Origin

This checklist is part of the [robot-diy-landscape](link) research project, documenting the robotics DIY ecosystem.

## License

MIT License — use freely, attribution appreciated.

---

**Star ⭐ if this saved you a debugging session!**

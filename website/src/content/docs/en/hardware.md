---
title: Hardware monitoring
description: Read CPU, GPU, RAM, network and disk usage, and add CPU temperature from tools you already use.
order: 8
icon: gauge
---

## The System page

Open **Sistema** from the icon bar or from **Altro** (More), or search for it in the Command Palette. It shows:

- CPU usage and frequency; GPU usage, VRAM, power and clock.
- RAM in use.
- Physical network traffic (download and upload).
- Disk activity and space per volume.

Data comes from Windows APIs. The sampling interval (1, 2 or 5 seconds) is shared: one sampler serves the System page and every Companion device, and it stops when nothing is watching.

## CPU temperature

Windows does not expose a reliable CPU temperature to apps. Dynamic can read it from the shared memory of tools you may already run:

- **MSI Afterburner**, with its shared memory available.
- **HWiNFO**, with shared memory support enabled.

Choose the source in **Settings → Sistema e monitoraggio**. Dynamic installs no driver; if neither tool is running, the temperature is simply not shown.

## Devices and batteries

Connected Bluetooth devices and USB-receiver devices appear in the Home status chips and in Companion, with their battery level when Windows exposes it. Settings are in **Settings → Dispositivi**.

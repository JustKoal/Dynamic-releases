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

### PawnIO (experimental)

Don't use those tools? Since 0.6.3 you can turn on **PawnIO**, a signed driver you install yourself from [pawnio.eu](https://pawnio.eu/). It covers AMD Ryzen Zen–Zen 5 (Tctl/Tdie) and Intel (CPU Package). It is optional and off by default; while it is off, Dynamic never opens the driver or downloads anything.

1. Turn on **Usa PawnIO (facoltativo)**.
2. Press **Predisponi**: Dynamic downloads the pinned official modules from the namazso/PawnIO.Modules release on GitHub, checks their SHA-256 hashes, and Windows asks once to copy a small read-only helper into Program Files.
3. Press **Autorizza**: Windows asks again (unknown publisher, because the helper has no Authenticode signature). The helper closes when you quit Dynamic or turn PawnIO off.

PawnIO reading is not yet validated on real hardware. **Diagnostica** copies a report without personal data. Some anti-cheat software may flag kernel drivers of this kind.

## Devices and batteries

Connected Bluetooth devices and USB-receiver devices appear in the Home status chips and in Companion, with their battery level when Windows exposes it. Settings are in **Settings → Dispositivi**.

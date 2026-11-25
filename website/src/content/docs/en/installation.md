---
title: Installation
description: Download the official installer, install Dynamic for your user account and keep it up to date.
order: 1
icon: download
---

## Before you start

- Windows 11 x64. Windows 10 has not been tested.
- A CPU with AVX2 if you want local speech recognition.
- About 431 MB for the installer. The optional Parakeet Ultra speech model is a separate download of about 550 MB.

## Install

1. Open the [Download page](../../download/) and choose **Download for Windows**. The file comes straight from the official GitHub release.
2. Optional: verify the file. In PowerShell, in your Downloads folder, run `Get-FileHash .\Dynamic_<version>_x64-setup.exe -Algorithm SHA256` and compare the result with the SHA-256 shown on the Download page.
3. Run the installer. It installs for the current user only and does not need administrator rights.
4. If **Windows SmartScreen** appears, choose **More info → Run anyway**. The warning appears because the installer has no Authenticode certificate yet.

When installation finishes, Dynamic appears as a small pill at the top of your main monitor.

## Updates

Dynamic checks the signed update feed shortly after startup and then periodically, if automatic checks are on. A new version appears in **Settings → Informazioni** (About). It is downloaded, verified with its minisign signature and installed only after you choose it. Your settings, accounts, notes, calendars, paired devices and messaging sessions are kept.

## Uninstall

Open **Windows Settings → Apps → Installed apps**, find **Dynamic** and choose **Uninstall**.

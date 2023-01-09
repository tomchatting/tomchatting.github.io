---
layout: post
title: hp ubuntu stuck in boot ➰
blurb: hopefully this helps someone else out
---

I installed Ubuntu 22.04 LTS into my laptop, and after completing first time setup and completing software updates the laptop only booted successfully about 50% of the time.

## troubleshooting steps

* boot into recovery mode
* enable networking
* drop to root recovery
* > sudo apt update && sudo apt upgrade -y
* > journalctl --since today
* > systemctl disable systemd-networkd-wait-online.service

Turns out the Wi-Fi was stuck in a loop waiting to connect and was stopping the login screen from launching. Boot is now way quicker now too.
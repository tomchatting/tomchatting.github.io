---
layout: post
title: "various thoughts"
category: ramble
---

**Some things I want to get off my chest that probably don't warrant their own post, and I feel like I owe this site a post.**

PassKey authentication is actually really, really dope. I must have set it up on my iPhone a little while back, and forgot about it. Today I was setting my Raspberry Pi back up as a desktop computer and needed to sign in to Google and GitHub, and it's absolutely seamless. You trigger the passkey sign-in screen (on GitHub, you don't even need your username for this) and scan the QR code with your phone camera (or insert your FIDO2 key of choice). RIP passwords?

Speaking of [Raspberry Pi](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/), Windows 11 works on a model 4 (I have the 8 GB RAM version). The performance is slightly worse than Linux, and there's no driver support - allegedly because of Qualcomm's (expiring) exclusivity deal with Microsoft. [WoR Flasher](https://worproject.com/downloads) is wicked easy to use, and I burned a USB Stick testing it. I've since gone and ordered a proper active-cooling case, 256 GB Micro-SD card and a new USB stick. More on that later, maybe.

I've fully drunk the cool-aid on GitHub Codespaces, I [mentioned it previously](/article/2023/01/24/github-codespaces/) but I'm really seeing the benefit of being able to just login directly to a VM (via VS Code) and not have to set anything else up. It's really easy to burn through your free time on the free tier (which is to be expected), but it's been more than enough for my occasional tinkering, *and even more occasional blogging*.

You can get your Pi's current CPU temperature (in Linux) by launching a terminal and running:

```bash
$ /usr/bin/vcgencmd measure_temp
```

Apparently it's a good idea to try keep it below 70°C.

## A header to show off Space Grotesk

That header won't make much sense if I change the font again, [you should really check the font out, though](https://fonts.google.com/specimen/Space+Grotesk).
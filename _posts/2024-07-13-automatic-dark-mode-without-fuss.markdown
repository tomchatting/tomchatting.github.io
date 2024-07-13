---
layout: post
title: "automatic dark mode on your website without fuss"
category: code
---

Forget the bullshit with light switches and weird toggles on your site with two snippets of code, one goes in your `<head>` tag:

```html
<meta name="supported-color-schemes" content="light dark">
```

and the other in your stylesheet:

```css
:root {
    color-scheme: light dark
}
```

For extra credit, set your theme colour, which (in supported browsers) also sets your browser chrome to the specified colour:

```html
<meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)">
```
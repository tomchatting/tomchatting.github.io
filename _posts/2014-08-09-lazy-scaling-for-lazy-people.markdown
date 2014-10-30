---
layout: post
title:  "Lazy scaling for lazy people"
date:   2014-08-09 00:26
category: note
---

<iframe width="640" height="315" src="//www.youtube.com/embed/qAkasSdD4M0" frameborder="0" allowfullscreen="1"> </iframe>

While device optimisation appears to be the Flavour of The Year(TM) effort for web developers, many (such as I) may find this laborious.

## Smack it with snippets until it works

{% highlight html %}
    <meta name="viewport" content="width=device-width, user-scalable=no" />
{% endhighlight %}

The above demands mobile browsers (namely Safari and Chrome) back-off on their normal charade of imitating fullscreen browsers, and instead report their true width to the CSS, meaning users are served what is considered a "mobile" friendly site.

This is only one part of the puzzle, however, since you will still need to scale your content in CSS accordingly.

{% highlight css %}
.wrapper { max-width: 38rem; margin: 0 auto; padding-left: 2%; padding-right: 2%; }
{% endhighlight %}

Something like the above keeps your site running at most resolutions with minimum work. Of course, it's still recommended you scale fonts and the like using media queries; but we're far too lazy for that now, aren't we?

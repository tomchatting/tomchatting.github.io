---
layout: post
title:  "Subtle Links with CSS"
date:   2012-03-08 20:02:51
category: note
---

I think every time I recreate this blog I end up posting a few little CSS tips that I use constantly, and when I say constantly I mean consistently for over three or so years now.

##Visible Clicks

Most people add a custom colour to `a:links` and `a:hover` in their CSS using the latter to show when a user has hovered over a clickable link, but what about when the user actually clicks? For that most old school browsers added a dotted outline to a:active which was all well and good back in the days of 800x600 and Web 1.0, but apparently we've moved passed that, with most sites not even employing any form of "active event" (see Twitter). This can be seen as a bad thing as for people without mouses employing the tab button to navigate a site it then becomes near on impossible to see what link you've selected, but I digress. A really subtle touch you can add to links to show a user has clicked is to employ a:active to show a small change to the link; my favourite being:

{% highlight css %}
    a:active {position: relative; top: 1px;}
{% endhighlight %}

You can try that on this null link (click and hold to see the position of the link change slightly). As you'll be able to see, clicking pushes the entire link down by a single pixel, generating a really subtle "pushed in" effect.
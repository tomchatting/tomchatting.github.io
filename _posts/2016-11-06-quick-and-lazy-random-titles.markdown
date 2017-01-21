---
layout: post
title: "quick and lazy random titles 💻"
headline: "First time JavaScript be gentle"
category: snippet
---

<iframe width="700" height="394" src="//www.youtube.com/embed/MVRg8gZ8zPA" frameborder="0" allowfullscreen="0"> </iframe>

## redesigned

Just to add some context to this: I refreshed the blog design *again*, and in part with stealing every idea I come across I've made a really quick and dirty random tagline picker thing. For a demo, refresh this page a few times.

## step one: create an array

Something as quick and dirty as I'm making here needs a dirty and quick array:

{% highlight js %}
var tags = [
  'Registered CSS offender.',
  'Mum, I\'m on the Internet!',
  '#implications',
  'Powered by magic beans',
  'Brought to you by Caprisuns',
  'A new design every week or your money back',
  'Come on, grab your friends!',
  'Follow me on Twitter!',
  'Steamed hams',
  'My other blog gets updates',
  '<i>"lol"</i> - you'
];
{% endhighlight %}

## step two: pseudorandom number generator

Anyone who's ever done "randomness" in computer programming before knows the general formula `random() * (max - min + 1)) + min` (where `random()` generally gives a number between 0 and 1). I won't pretend to understand or remember how this works, however if you're interested in the how check [this excellent explanation](http://stackoverflow.com/a/1527820) on StackOverflow out.

Now since our array starts at 0 (so we have no min), our next--and only other--line can just be:

{% highlight js %}
var random_tag = tags[Math.round(Math.random()*(tags.length-1))];
{% endhighlight %}

## step three: it's lit

Throw in a cheeky tag into where you want your random tag:

{% highlight html %}
<span id=random-tag></span>
{% endhighlight %}

then add a not so cheeky ```document.addEventListener``` to insert ```random_tag``` into your page:

{% highlight js %}
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("random-tag").innerHTML = " " + random_tag
})
{% endhighlight %}

## there's probably a better way to do this

Full disclosure: I generally have no idea what I'm doing, so if you know of or find a better way of performing this fairly simple task: go ahead and use it.

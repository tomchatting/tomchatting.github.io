---
layout: post
title: "setting up a dev environment for github pages ⌨️"
category: tech
---

I'm hoping that sharing this will save somebody else the same headaches I went through trying to get a dev environment set up for GitHub pages on a Mac.

---

## table of contents

1. [updating ruby](#ruby)
2. [installing bundler](#bundle)
3. [pulling your repo](#git)
4. [building the environment](#build)
5. [serve --watch](#serve)
6. [further info and updates](#updates)

---

## <a id=ruby></a>updating ruby

Your first step is to update the version of Ruby installed by default to the currently supported version by GitHub Pages (*see 'further info and updates'*).

Open terminal and run:

{% highlight bash %}
$ rvm install ruby-2.7.1
{% endhighlight %}

replacing the version number where appropriate.

This install can be fairly needy, so keep by it while it asks you for your sudo password and permission every 20 seconds or so. This step is limited by your processing power and internet connection, and can take a while.

Once complete, use:

{% highlight bash %}
$ ruby -v

ruby 2.7.1p83 (2020-03-31 revision a0c7c23c9c) [x86_64-darwin19]
{% endhighlight %}

to confirm the install has set your new version as the default for the rvm. If not, use:

{% highlight bash %}
$ rvm --default use 2.7.1
{% endhighlight %}

## <a id=bundler></a>installing bundler

[Bundler](//bundler.io) is recommended to install and run Jekyll on your local machine. Bundler manages all of your gem dependencies, and mirrors the build environment used by GitHub.

{% highlight bash %}
$ gem install bundler
{% endhighlight %}

## <a id=git></a>pulling your repo

Now we're cooking with gas. Pull your repo using your method of choice. The easiest way is to download the GitHub app for Mac and pull your Pages repo. You can also use CLI/SSH/GH-CLI (no judgement zone).

## <a id=build></a>building the environment

Come back to Terminal and navigate to the root directory of your site.

{% highlight bash %}
$ bundle install
{% endhighlight %}

If you receive any build errors at this point, check your Ruby version. If this matches what's in this article, check 'further info and updates' just in case the version requirements have changed.

## <a id=serve></a>serve --watch

Now you can run your Jekyll site locally, and edit 'til your hearts content. I use the --watch argument as it means I can continue to edit the site and changes will be picked up on the fly. Page builds are, again, limited by your machine. I say this as I recall being able to build my site in <0.4 seconds on my old PC build, but it now takes around 7-8 seconds on the MacBook.

{% highlight bash %}
$ bundle exec jekyll serve --watch
{% endhighlight %}

![screenshot of mid 2010 macbook editing this post](/static/images/github-pages-dev-environment-mac.png)

## <a id=updates></a>further info and updates

* The official GitHub Pages dependancies versions are found [here](//pages.github.com/versions). If you are using Bundler, the first thing to check is your Ruby version
* If your version of github-pages or the other dependancies slip out of date on your local machine, you need to update them using `bundle update github-pages`

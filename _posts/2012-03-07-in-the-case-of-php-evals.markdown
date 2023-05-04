---
layout: post
title:  "In the case of evals in PHP"
date:   2012-03-07 23:52
category: article
---

> The eval() language construct is very dangerous because it allows execution of arbitrary PHP code. Its use thus is discouraged. If you have carefully verified that there is no other option than to use this construct, pay special attention not to pass any user provided data into it without properly validating it beforehand.

Today I got a bit of a coding itch, it ended up in me having an epiphany in the shower of all places as to why in _hells_ name I'd ever used `eval` in making SquareCMS, and how to fix it. After a lot of work this afternoon I've managed to rewrite [/controllers/theme.php](https://github.com/tomchatting/SquareCMS/blob/master/square/controllers/theme.php) from scratch using functions to output text then displaying that to the user. Originally I did some rather recursive and _dangerous_ stuff (see blockquote from PHP.net) within the theme file, using it to generate another PHP file within itself then using `eval` to execute it within theme.php.

theme.php originally had a few functions or different roles. At it's simplest, theme.php would always be called by a function using eval in a way such as:

```php
eval(echo 'themeFunction($file)';)
```

and would be passed a file in plain text, usually a theme file such as [this](https://github.com/tomchatting/SquareCMS/blob/master/square/themes/default/index.page) one. This file would then be stripped of all its' `<square:tags />` by using regular expressions or simple find and replace functions, in these tags places would be the raw code required to do what the theme writer wanted to be present, for example `<square:url />` returns the blogs' URL using the pre-set constant, but returns it as `'.URL.'` so the PHP can be executed (as if you look above the eval call is echoing the output) and leaves the next returned string able to do the same, leaving an even playing field. This file would then be saved to a variable, ready to be eval'd by the calling function.

Eval executes arbitrary PHP code, exactly as it would run as if you'd called it from the web browser or included it from another file; so it runs with the same privileges as such a file would if it were uploaded via FTP and executed. This produces an inherent problem particularly with something like a blog engine such as the one I made, not because you can generate execution issues (this is true, debugging with eval is much, much harder as I discovered) but because when you begin introducing user generated content like themes and plugins; security becomes a huge issue.

## Trust No-One

Herein lies the problem: if you allow a user to begin adding non-verified and non-tested components to your software, is it right to allow them to operate at the same execution level as the verified and tested components? Of course not, that's suicide. If a malicious user were to set up a file or plugin that put the users server, or worse their _data_ at risk, it wouldn't be the fault of the user for installing such a component, nor would it be the malicious guy (well, it would, but that's not the point) it'd be the jack-ass that allowed for this sort of stuff to happen in the first place.

So before anything like this was able to happen to anyone that may use/fork Square in the future, I decided to completely remove all evals from SquareCMS, and as of tomorrow on GitHub the code this server is running will be pushed into the Repo for review/proof.

## Simple take-out

The main conclusion to gain from this article/apology is not that you should never use evals, they can be quite useful for a variety of reasons, and in some cases they are the only solution to a problem; but you **have** to be 110% sure that all parameters are both correct (to save difficult debugging) and trusted, and in the case of third-party solutions being added to your project, you can guarantee neither, so a different option is often the better one.

For what it's worth, it turns out SquareCMS runs around 0.01 seconds _slower_ now it doesn't run evals to parse themes, as it has to parse files two or three times separately due to the nature of how I construct pages from files, though I'm sure I can shave that back off down the road when I get my next itch.

1 [http://php.net/manual/en/function.eval.php](http://php.net/manual/en/function.eval.php)

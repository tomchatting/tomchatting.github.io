---
layout: post
title: "flaky-toothbrush, a ci/cd playground built on surge.sh 🧑‍💻"
category: ramble
---

<iframe class="video" src="https://www.youtube.com/embed/L9HYJbe9Y18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="0"> </iframe>

I've hinted in a [previous post](https://www.tomwillgoto.space/article/2023/01/24/github-codespaces/) that I was using GitHub Codespaces to complete some of my development without having to spin up my dev environment on every machine I use. I'm now also using GitHub Actions to teach myself [CI/CD](https://en.wikipedia.org/wiki/CI/CD), and I've managed to plug it into [surge.sh](https://surge.sh) so I can play around with some front-end development without having to commit any time to looking after a server.

I've created a GitHub action which publishes to Surge in around 22s. I've named this surge.yml in my `.github` folder and I've also [published it as a Gist](https://gist.github.com/tomchatting/adf51dfed53a26daba7595a88469f97e).

The first project I've spun up onto the site is a [distance tracker](https://flaky-toothbrush.surge.sh/1000-mile-challenge.html) as part of the NHS 1000 mile challenge. This is the end-product of a pipeline which runs from my Apple Watch, via a TestFlight app called [Hadge](https://github.com/ashtom/hadge) to a private health repository on my GitHub. An action then runs on this repo to generate a json file which the *very basic* BootStrap and Vanilla JavaScript page uses to generate a loading-bar style representation of our progress through the year vs my progress vs 1000 miles of walking and running.

<a href="https://flaky-toothbrush.surge.sh/1000-mile-challenge.html"><img src="/static/images/flaky-toothbrush.png" alt="A screenshot of my distance tracking webpage." width="776" height="912"></a>

The source for anything I spin up here will be available on its' [repo](https://github.com/tomchatting/flaky-toothbrush), such as for the [Awesome Shop](https://flaky-toothbrush.surge.sh/shop/) which I'm wanting to turn into a 'modern' Vanilla JavaScript tutorial.

---

<h2 id=aside>Aside from all that <a href="#aside" class="heading-link" aria-label="Aside from all that"></a></h2>

I'm planning on spinning down my PHP sandox [Hexagon](https://hexagon.tomwillgoto.space) in favour of a Ruby on Rails project I've been working on. I do also plan on putting the PHP project I span up onto GitHub to sort of prove I can do better than "[Square](https://github.com/tomchatting/square)" over 7 years later (*prove to who?* <small>me</small>).
---
layout: page
title: Archive
permalink: /archive/
---

# Blog Posts

<ul class="archive">

{% for post in site.posts %}
<li>{{ post.date | date_to_string }} &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

</ul>

<hr>

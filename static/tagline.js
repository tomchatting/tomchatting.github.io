var tags = [
  'loves waffles',
  'implores you to inspect element',
  'watches mr robot',
  'just wants to talk',
  'voted for Kodos',
  'plays LoL',
  'has never tweeted this blog',
  'var name = "tom"',
  '<a href=https://www.youtube.com/watch?v=bZe5J8SVCYQ target=_blank>knows where he is</a>',
  'lives for his sins',
  'talks to himself',
  'doesn\'t gaf',
  'escapes characters',
  'wrote a lot of random taglines',
  'thinks he\'s hilarious',
  'thinks you\`re great'
];

var random_tag = tags[Math.round(Math.random()*(tags.length-1))];

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("random-tag").innerHTML = " " + random_tag
})

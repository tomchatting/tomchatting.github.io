var tags = [
  'loves waffles',
  'uses the <marquee>&lt;marquee&gt;</marquee> tag',
  'implores you to inspect element',
  'watches mr robot',
  'just wants to talk'
];

var random_tag = tags[Math.round(Math.random()*(tags.length-1))];

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("random-tag").innerHTML = " " + random_tag
})

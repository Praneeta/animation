/*global Backbone */
var app = app || {};

app.templates = {};

app.templates.meta = "<meta charset=\"UTF-8\">"
  + "<title><%= title %></title>"
  + "<meta name=\"keywords\" content=\"<%= keywords %>\">"
  + "<meta name=\"description\" content=\"<%= title %>\">"
  + "<meta property=\"og:title\" content=\"<%= title %>\" />"
  + "<meta property=\"og:description\" content=\"<%= description %>\" />"
  + "<meta property=\"og:image\" content=\"/assets/images/<%= image %>.jpg\" />"
  + "<meta name=\"viewport\" content=\"width=device-width; initial-scale=1.0; maximum-scale=1.0;\"/>"
  + "<link rel=\"icon\" type=\"image/png\" href=\"assets/images/<%= icon %>.png\" />"
  + "<link rel=\"apple-touch-icon\" type=\"image/png\" href=\"assets/images/<%= icon %>.png\"/>"

app.templates.cards = {}

app.templates.cards.christmas = {}

app.templates.cards.christmas.index = {
  content: "<h1>Merry Christmas</h1><ul class=\"card-list\"></ul><div class=\"footer\">Contact us at: makemyholidaycard@gmail.com</div>"
, card: "<li class=\"card\"><a class=\"card-link\" href=\"cards/christmas/<%= card.slug %>\"><img class=\"card-img\" src=\"assets/images/<%= card.img %>\"/><%= card.title %></a></li>"
}

app.templates.cards.question = "<div class='question-container'><%= question %></div>"
+ "<div class='answer-options'><ul></ul></div>"

app.templates.cards.answerOption = "<li class='answer'><%= option %></li>"

app.templates.cards.reward = "<div class=\"gift new-gift <%= reward %>\"></div>"

app.templates.cards.christmas.content = "<textarea class=\"message\" rows=3 placeholder=\"type your holiday message here...\"></textarea>" +
"<div class=\"fb-share\"></div>" +
"<div class=\"gift-holder\" title=\"click to get ornaments\"></div>" +
"<div class=\"tree canvas\"></div>" +
"<div class=\"gift-box\"></div>" +
"<div class=\"questions-container\"></div>" +
"<div class=\"footer no-share\"><a href=\"/\">Make a different card</a></div>"

app.templates.cards.christmas.correct = "<div class=\"gift-message hidden\">Congratulations!! Place your ornament on the tree relive the magic of Christmas!</div>"

app.templates.cards.christmas.reward = 'ornament'

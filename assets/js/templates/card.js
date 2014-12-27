/*global Backbone */
var app = app || {};

app.index = {}

app.index.card = "<li class=\"card\"><a class=\"card-link\" href=\"<%= card.slug %>.html\"><img class=\"card-img\" src=\"assets/images/<%= card.img %>\"/><%= card.title %></a></li>"

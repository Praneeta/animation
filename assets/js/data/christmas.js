var app = app || {};

app.christmas = {}

app.christmas.classicModel = {
  "id": 1,
  "title": "Classic",
  "slug": "snowman",
  "img": "snowman-bg.jpg"
}


app.christmas.harryPotterModel = {
  "id": 2,
  "title": "Harry Potter",
  "slug": "harry-potter",
  "img": "harry-potter.jpg",
  "questions":
    [
      { "q": "qwe", "options": ["12", "324"], "a": 0 }
    ]
}


app.christmas.religiousModel = {
  "id": 3,
  "title": "Religious",
  "slug": "religious",
  "img": "religious.jpg",
  "questions":
    [
      { "q": "qwe", "options": ["12", "324"], "a": 0 }
    ]
}

app.christmas.cards = [
  app.christmas.classicModel,
  app.christmas.harryPotterModel,
  app.christmas.religiousModel
]

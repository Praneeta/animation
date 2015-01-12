var app = app || {};

app.data = {}

app.data.new_year = {}

app.data.new_year.simple = true



app.data.christmas = {}

app.data.christmas.simple = false

app.data.christmas['classic'] = {
  "id": 1,
  "title": "Classic",
  "slug": "snowman",
  "img": "snowman-bg.jpg"
}


app.data.christmas['harry-potter'] = {
  "id": 2,
  "title": "Harry Potter",
  "slug": "harry-potter",
  "img": "harry-potter.jpg",
  "gift": ['bear', 'star-new', 'snitch', 'box'],
  "gift-drop": 440,
  "questions":
    [
      {
        "question":"What is Dumbledore's sister's name?",
        "answers":["Anna", "Ariana", "Adriana", "Angelina"],
        "correct": 1
      },
      {
        "question":"Who gives Harry the cloak of invisibilty in the philospher's stone?",
        "answers":["Sirius Black","Professor Snape", "Albus Dumbledore", "Mrs Weasley"],
        "correct": 2
      },
      {
        "question":"What did Dumbledore leave in his will for Ron?",
        "answers":["Gryffindor's sword","A howler", "The Elder Wand", "Deluminator"],
        "correct": 3
      },
      {
        "question":"What is the name of Filch's cat?",
        "answers":["Little Norbert","Mrs. Norris ", "Ms. Norris", "Ms. Norbert"],
        "correct": 1
      },
      {
        "question": "What is name the publication by Xenophilius Lovegood?",
        "answers":["Quibbler","Daily Prophet", "Daily Planet", "Hogwarts Daily"],
        "correct": 0
      },
      {
        "question": "What is the name of the school Victor Krum attended?",
        "answers":["Hogwarts School of Witchcraft and Wizardry", "Durmstrang Institute", "Beauxbatons Academy of Magic", "Beauxtrix Academy of Magic"],
        "correct": 1
      },
      {
        "question": "What is the name of Rons's mom?",
        "answers":["Molly Weasley", "Ginny Weasley", "Minnie Weasley", "Bella Weasley"],
        "correct": 0
      },
      {
        "question": "Which is Pansy Parkinson's house?",
        "answers":["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
        "correct": 1
      },
      {
        "question": "Which is not an Unforgivable Curse?",
        "answers":["Avada Kedavra", "Crucio", "Sectumsempra", "Imperio"],
        "correct": 2
      },
      {
        "question": "What did Lavender Brown call Ron?",
        "answers":["Ron Hon", "Won-won ", "Bon Bon", "Just Ron"],
        "correct": 1
      },
      {
        "question": "What is the name of the wizards prison?",
        "answers":["Rock", "Quidditch", "Azkaban", "Hedwig"],
        "correct": 2
      },
      {
        "question": "Who dies in the graveyard the night Voldemort returns?",
        "answers":["Cedric Diggory", "Colin Creevey", "Peter Pettigrew", "Argus Filch"],
        "correct": 0
      },
      {
        "question": "What does Dobby wear?",
        "answers":["Pillow case", "Old bedsheet", "Draco's old clothes", "Lucious Malfoy's socks"],
        "correct": 0
      },
      {
        "question": "Who was the half-blood prince?",
        "answers":["Dumbledore", "Ron Weasley", "Voldermort", "Snape"],
        "correct": 3
      },
      {
        "question": "What shape does Snape's patronus take?",
        "answers":["Stag", "Doe", "Rabbit", "Lion"],
        "correct": 1
      },
    ]
}


app.data.christmas['religious'] = {
  "id": 3,
  "title": "Religious",
  "slug": "religious",
  "img": "religious.jpg",
  "questions":
    [
      { "q": "qwe", "options": ["12", "324"], "a": 0 }
    ]
}

app.data.christmas.cards = [
  app.data.christmas['classic'],
  app.data.christmas['harry-potter'],
  app.data.christmas['religious']
]

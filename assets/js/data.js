var app = app || {};

app.data = {}

app.data.simple = false

app.data.meta = {
  title: 'Happy Republic Day',
  keywords: 'cards, free, india, republic day',
  description: '',
  image: 'bg.gif',
  icon: 'heart.jpg'
}

app.data.cards = ['flag', 'flag_painted', 'flight', 'heart', 'heroes', 'peace', 'simple', 'tree', 'vande_matarm', 'hands']

app.data.cards.details = {
  "gift": ['stamp_1.jpg', 'stamp_2.jpg', 'stamp_3.jpg', 'flags.png', 'isro.png'],
  "gift-drop": 440,
  "questions":
    [
      {
        "question":"The state emblem of India, how many lions are visible?",
        "answers":["2", "3", "4", "5"],
        "correct": 1
      }
    , {
        "question":"How many spokes are on the Chakra in the Indian Flag?",
        "answers":["24", "26", "28", "30"],
        "correct": 0
      }
    , {
        "question":"On what year was the Jana-gana-mana adopted by the Constituent Assembly as the national athem?",
        "answers":["1947", "1948", "1950", "1951"],
        "correct": 2
      }
    , {
        "question":"The National Sport of India is",
        "answers":["Cricket", "Hockey", "Badminton", "Football"],
        "correct": 1
      }
    , {
        "question":"What is the longest river flowing in India?",
        "answers":["Alaknanda", "Yumana", "Ganga", "Gumti"],
        "correct": 2
      }
    ]
}

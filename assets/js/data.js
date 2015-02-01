var app = app || {};

app.data = {}

app.data.simple = false

app.data.meta = {
  ogurl: '',
  title: 'Happy Valentine\'s Day | makemyholidaycard.com',
  keywords: 'cards, free, quiz, 14, Feb, valentine, valentines day, love, hearts, cute, romance, romantic, funny, chemistry, ecards, last minute cards',
  description: 'Shy or bold, we got a card for you. But you have to pass this test before you can express your love.',
  imageType: 'be-my-valentine',
  image: 'jpg',
  icon: 'heart.png'
}

app.data.cards = ['bee-my-valentine', 'chemistry', 'olive-you', 'loaf-you','u-blew-my-mind', 'chemistry-be-valentine' , 'love', 'cute', 'chemistry-valentine', 'king', 'queen', 'listen' ]

app.questions = [
  {
    "question":"Who among the following is known as Flying Sikh of India?",
    "answers":["Kapil Dev", "PT Usha", "Milkha Singh", "Joginder Singh"],
    "correct": 2
  },
  {
    "question":"In which stadium did Sachin Tendulkar score his 100th century?",
    "answers":["Eden Garden", "Shere Bangla Stadium", "Firoz Shah Kotla Ground", "Vankhede Stadium"],
    "correct": 1
  },
  {
    "question":"The 'Dronacharya Award' is given to...?",
    "answers":["Sportsmen", "Coaches", "Umpires", "Sports Editors "],
    "correct": 1
  },
  {
    "question":"The first Indian woman athlete to win a gold in Asian Games is",
    "answers":[" P.T.Usha", "Shayni Abhramn", "Kamaljit Sandhu", "Mary Kom"],
    "correct": 0
  },
  {
    "question":"Who is the only crickter to score a century in the debut match of Ranji Trophy, Duleep Trophy and Irani Trophy?",
    "answers":["Sachin Tendulkar", "Sunil Gavaskar", "Mohammad Azharuddin", "Kapil Dev"],
    "correct": 0
  }
]

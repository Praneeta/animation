var app = app || {};

app.data = {}

app.data.simple = false

app.data.meta = {
  ogurl: '',
  title: 'Happy Republic Day',
  keywords: 'cards, free, India, republic, quiz, 26, Jan, 1950, holiday, vande mataram, jana gana mana, patriotic, mahatma gandhi, baba ambedkar, constitution, dry day, bharat, peace, freedom, history',
  description: 'Make your republic day card, play a quiz, share with your friends',
  imageType: 'gif',
  image: 'india',
  icon: 'heart.jpg'
}

app.data.cards = ['flight', 'heart', 'peace', 'simple', 'tree', 'hands', 'flag', 'flag_painted', 'vande_mataram' ]

var sports = [
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
  },{
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
    "question":"The 'Dronacharya Award' is given to...?",
    "answers":["Sportsmen", "Coaches", "Umpires", "Sports Editors "],
    "correct": 1
  }
]


var science = [
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
  },{
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
    "question":"The 'Dronacharya Award' is given to...?",
    "answers":["Sportsmen", "Coaches", "Umpires", "Sports Editors "],
    "correct": 1
  }
]


var geography = [
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
  },{
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
    "question":"The 'Dronacharya Award' is given to...?",
    "answers":["Sportsmen", "Coaches", "Umpires", "Sports Editors "],
    "correct": 1
  }
]

var past = [
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
  },{
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
    "question":"The 'Dronacharya Award' is given to...?",
    "answers":["Sportsmen", "Coaches", "Umpires", "Sports Editors "],
    "correct": 1
  }
]


var bollywood = [
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
  },{
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
    "question":"The 'Dronacharya Award' is given to...?",
    "answers":["Sportsmen", "Coaches", "Umpires", "Sports Editors "],
    "correct": 1
  }
]

app.questions = [sports, science, geography, past, bollywood]

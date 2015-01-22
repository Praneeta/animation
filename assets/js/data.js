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

var history = [
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

app.questions = [sports, science, geography, history, bollywood]

var app = app || {};

app.data = {}

app.data.simple = false

app.data.meta = {
  ogurl: '',
  title: 'Happy Republic Day | makemyholidaycard.com',
  keywords: 'cards, free, India, republic, quiz, 26, Jan, 1950, holiday, vande mataram, jana gana mana, patriotic, mahatma gandhi, baba ambedkar, constitution, dry day, bharat, peace, freedom, history',
  description: 'How well do you know India? Show off your knowledge by winning a stamp for every correct answer. Then `post` your Republic day card to share it with friends.',
  imageType: 'gif',
  image: 'india',
  icon: 'heart.jpg'
}

app.data.cards = ['planes', 'heart', 'peace', 'simple', 'tree', 'hands', 'flag', 'flag_painted', 'vande_mataram' ]

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
    "question":"The first Indian woman athlete to win a gold in Asian Games is",
    "answers":[" P.T.Usha", "Shayni Abhramn", "Kamaljit Sandhu", "Mary Kom"],
    "correct": 0
  },
  {
    "question":"Who is the only crickter to score a century in the debut match of Ranji Trophy, Duleep Trophy and Irani Trophy?",
    "answers":["Sachin Tendulkar", "Sunil Gavaskar", "Mohammad Azharuddin", "Kapil Dev"],
    "correct": 0
  },
  {
    "question":"First Indian batsman to score a triple century in test match",
    "answers":["Sachin Tendulkar", "Rahul Dravid", "Virendra Sehwag", "Kapil Dev"],
    "correct": 2
  },{
    "question":"Which batsman is known as 'The Wall'",
    "answers":["Sunil Gavaskar", "Rahul Dravid", "Sachin Tendulkar", "Robin Singh"],
    "correct": 1
  },
  {
    "question":"Which year was the Indian Premier League (IPL) - Twenty20 cricket tournament started?",
    "answers":["2005", "2006", "2007", "2008"],
    "correct": 3
  },
  {
    "question":"Which year was the Indian Super League for football started?",
    "answers":["2011", "2012", "2013", "2014"],
    "correct": 2
  },
  {
    "question":"Which location, world famous for its football club, was the venue of the first of Tendulkar's hundred hundreds?",
    "answers":["Leeds", "Lord's", "Old Trafford", "Birmingham"],
    "correct": 2
  }
]


var science = [
  {
    "question":"India's first satelitte 'Aryabhatta' was launched from?",
    "answers":["Soviet Union", "America", "India", "Israel"],
    "correct": 0
  },
  {
    "question":"First satellite to be placed in orbit by Indian made launch vehicle SLV-3?",
    "answers":["Aryabhatta", "Rohini", "Bhskara-1", "INSAT"],
    "correct": 1
  },
  {
    "question":"Which year was India's first satellite launched?",
    "answers":["1972", "1975", "1978", "1980"],
    "correct": 1
  },
  {
    "question":"Who is known as the father of Indian Space Program?",
    "answers":["CV Raman", "Vikrama Sarabhai", "APJ Kalam", "Satish Dhawan"],
    "correct": 1
  },
  {
    "question":"Internet in Indian was started by VSNL on",
    "answers":["15th August, 1992", "15th August, 1995", "26th August, 1997", "15th August, 2000"],
    "correct": 1
  },
  {
    "question":"Who was the citizen of India to win a nobel prize in 2009",
    "answers":["VS Naipaul", "V Ramakrishnan", "Amartyan Sen", "Mother Teresa"],
    "correct": 1
  },
  {
    "question":"ISRO headquarter is located in",
    "answers":["Delhi", "Chennai", "Mumbai", "Bengaluru"],
    "correct": 3
  },
  {
    "question":"Who is known as the father of the Indian Nuclear Programme?",
    "answers":["APJ Kalam", "Homi J Bhabha", "Vikram Sarabhai", "Meghnand Saha"],
    "correct": 1
  },
  {
    "question":"The first nuclear test conducted in India under the code name of Smiling Buddha in the year",
    "answers":["1973", "1974", "1988", "1996"],
    "correct": 1
  },
  {
    "question":"First Nuclear plant in India was in",
    "answers":["Tarapur, Maharashtra", "Rawatbhata, Rajasthan", "Narora, Uttar Pradesh", "Kakrapur, Gujrat"],
    "correct": 0
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
    "question":"Name the Rajput princess whom Akbar married?",
    "answers":["Jodha Bhai", "Noor Jehan", "Mumtaz Mahal", "Jija Bai"],
    "correct": 0
  },
  {
    "question":"In whose memory was the Taj Mahal built?",
    "answers":["Shah Jahan", "Mumtaz Mahal", "Noor Jehan", "Anarkali"],
    "correct": 3
  },
  {
    "question":"When did Gandhiji launch the Quit India movement?",
    "answers":["9th August 1937", "9th August 1942", "9th August 1947", "9th August 1950"],
    "correct": 1
  },
  {
    "question":"Name Maharana Pratap's famous horse.",
    "answers":["Bucephalus", "Asvamedha", "Chetak", "Rana"],
    "correct": 2
  },
  {
    "question":"Who said \"Aadhi lagin Kondanyache, mag lagin Raibache\", which means\"First the marriage of Kondana(Fort) and then the marriage of Raiba(his son)\"",
    "answers":["Chatrapati Shivaji Maharaj", "Chatrapati Sambhaji Maharaj", "Tanjai Malusare", "None of the above"],
    "correct": 1
  },
  {
    "question":"Who was the founder of the Maratha Empire (Swarajya)",
    "answers":["Chatrapati Shivaji Maharaj", "Chatrapati Sambhaji Maharaj", "Rajaram Chhatrapati", "None of the above"],
    "correct": 1
  },{
    "question":"Who was the first President of India?",
    "answers":["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "M. K. Gandhi", "Jawaharlal Nehru"],
    "correct": 0
  },
  {
    "question":"Who built the famous Sanchi stupa?",
    "answers":["Ashoka", "Buddha", "Vikarmaditya", "Harsha"],
    "correct": 0
  },
  {
    "question":"Who wrote the famous poem Sarfaroshi ki Tamanna?",
    "answers":["Chandra Shekhar Azad", "Bhagat Singh", "Lala Lajpat Rai", "Ram Prasad Bismil"],
    "correct": 3
  },
  {
    "question":"Who wrote the Indian National Anthem - Jana Gana Mana?",
    "answers":["Sarojini Naidu", "Rabindranath Tagore", "Kabir", "Kalidas"],
    "correct": 1
  }
]


var bollywood = [
  {
    "question":"Name the Rajput princess whom Akbar married?",
    "answers":["Jodha Bhai", "Noor Jehan", "Mumtaz Mahal", "Jija Bai"],
    "correct": 0
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

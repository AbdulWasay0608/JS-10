var questions= [
    {
        question: "HTML stands for __________",
        options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
        correctAnswer: "Hypertext Markup Language"
    },
    {
        question: "CSS stands for __________",
        options: ["CSS", "CSS", "Cascading Styling Sheet", "CSS"],
        correctAnswer: "Cascading Styling Sheet"
    },
    {
        question: "JS stands for __________",
        options: ["JS", "JS", "Java Script", "JS"],
        correctAnswer: "Java Script"
    },    {
        question: "RAM stands for __________",
        options: ["RAM", "RAM", "Random Access Memory", "RAM"],
        correctAnswer: "Random Access Memory"
    },    {
        question: "SQL stands for __________",
        options: ["SQL", "SQL", "Structured Query Language", "SQL"],
        correctAnswer: "Structured Query Language"
    },    {
        question: "HTML is programming Language?",
        options: ["YES", "NO"],
        correctAnswer: "NO"
    },

]
var displayQuestion = document.getElementById('displayQuestion')
var currentQuestion = document.getElementById('currentQuestion')
var totalQuestion = document.getElementById('totalQuestion')
var optionParent = document.getElementById('optionParent')


var indexVal = 0
var marks = 0


function renderQuestion() {
    var que = questions[indexVal]
    displayQuestion.innerText = que.question
    totalQuestion.innerText = questions.length
    currentQuestion.innerText = indexVal + 1

    optionParent.innerHTML = ""
    for(var i = 0; i < que.options.length; i++) {
        optionParent.innerHTML += `<button class="btn-1" onclick = "checkAns('${que.correctAnswer}', '${que.options[i]}')" > ${que.options[i]} </button>`
    }


    
}

function nextQue() {
    indexVal ++;
    renderQuestion()

    
}

function checkAns(a,b) {
    console.log(a,b)

    if( a==b ) {
        marks = marks + 1
    }

    

        
    
    console.log(marks)
    nextQue()



}





renderQuestion();
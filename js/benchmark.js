const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      options: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
        "Central Processing Unit"
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      options: ["Static", "Private", "Public","Final"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      options: ["True","False"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      options: ["True","False"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      options: [".png", ".jpeg", ".gif",".svg"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      options: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet"
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      options: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
        "Nougat"
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      options: ["120", "160", "100","140"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      options: ["True","False"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      options: ["Python", "C", "Jakarta","Java"],
    },
  ];


  let totalScore=0;
  let currentIndex=-1;
  let optionIndex=-1;
function displayQuestion(){   
        //currentIndex=Math.floor(Math.random()*questions.length-1)
        let question = document.getElementById("question");
        currentIndex++;
            let currentQuestion = questions[currentIndex];
            question.innerHTML=currentQuestion.question;
           
}

   
function displayOptions(){
    let answer=document.getElementById('answer-btns');
    optionIndex++;
    
    let currentQuestion = questions[optionIndex];
    let currentOptions=currentQuestion.options
    
    for(i=0;i<currentQuestion.options.length;i++){
        let option=document.createElement('button')
        option.classList.add('answer-btn')
        option.innerText=currentQuestion.options[i]
        answer.appendChild(option)
    }
    
    
    
    
 
}
        
    
        
    

    








                 
            


 


/*
function selectAnswer(){
       option.addEventListener=("click",function(){
       
})
        let givenOptions=document.getElementsByClassName('answer-btn')
    for(i=0;i<options.length;i++){
        option=options[i];
        option.onclick=function(){
        option.classList.add('selectedAnswer')
}
     }
 }
}

*/
           
            

        
    

function startGame(){
        displayQuestion()
        displayOptions()
       //selectAnswer()
    }

  window.onload = startGame;


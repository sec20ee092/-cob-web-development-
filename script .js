const questions = [
    {
        question : "What does HTML stand for?",
        ans: [
            {text: "Hypertext Markup Language", correct: true},
             {text: "Hyperlinks and text Markup Language", correct: false},
              {text: "Home Tool Markup Language", correct: false},
               {text: " HyperText Transfer Protocol ", correct: false},
               ]
    },
    {
         question: "There are levels of heading in HTML ?",
        ans: [
            {text: " Three", correct: false},
             {text: "Five", correct: false},
              {text: "Six", correct: true},
               {text: "Fpir", correct: false},
               ]
       
    },
    {
         question: " Which of the following tags do not require a terminator?",
        ans: [
            {text: " <u>", correct: false},
             {text: " <br>", correct: true},
              {text: "<b>", correct: false},
               {text: "none of the above", correct: false},
               ]
    },
    {
         question: " To get the ordered list we use ?",
        ans: [
            {text: " <h1>", correct: false},
             {text: "<ul>", correct: false},
              {text: " <ol>", correct: true},
               {text: "<ml>", correct: false},
               ]
    },
    {
         question: "For a particular font its size attribute can be an absolute value ranging form?",
        ans: [
            {text: "1-10", correct: true},
             {text: "1-9", correct: false},
              {text: "1-8", correct: false},
               {text: "1-7", correct: false},
               ]
    },
    {
         question: "The Major components of the Web browser are?",
        ans: [
            {text: "Menu Bar", correct: false},
             {text: "ToolBar", correct: false},
              {text: "Location", correct: false},
               {text: " All Of the Aboverk", correct: true},
               ]
    },
    {
         question: "Which one of the following tags is used to insert graphics in the webpage ?",
        ans: [
            {text: "<image>", correct: false},
             {text: "<images>", correct: false},
              {text: "<img>", correct: true},
               {text: "<graphics>", correct: false},
               ]
    },
    {
         question: " html comment should be enclosed between ?",
        ans: [
            {text: "<!- and - >", correct: true},
             {text: " <! And !>", correct: false},
              {text: " <!— and –“”", correct: false},
               {text: " none of the above", correct: false},
               ]
    },
   
    ];
 const questionElement = document.getElementById("question");
const ansbuttons = document.getElementById("ans-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
   
}
function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = question + "." + currentQuestion.question;
   
   
    currentQuestion.answer.foreach(answer => {

        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectedAnswer);
    });
   
}
function   resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
         selectedBtn.classList.add("incorrect");
    }
   
    Array.from(answerButtons.Children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showscore(){
    resetstate();
    questionElement.innerHTML = `You Score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentquestionIndex++;
    if(currentquestionIndex < question.length){
        showquestion();
    }else{
        showscore();
    }
   
}
nextButton.addEventListener("click", ()=>{
    if(currentquestionIndex < questions.length){
        handleNextButton();
    }else{
        startquiz();
    }
})

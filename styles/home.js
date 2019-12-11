//SLIDES
(function() {

    const slides = document.getElementById('slides')
    const slidesInner = slides.querySelector('.slides-inner')

    const images = slidesInner.querySelectorAll('img')
    const slideWidth = slides.clientWidth

    const nextButton = slides.querySelector('.quiz-next-button')
    const prevButton = slides.querySelector('.quiz-previous-button')

    let index = 0

    console.log('Slides are working *****')

    if (nextButton !== null) {
        nextButton.addEventListener('click', function(e) {
            e.preventDefault()
            console.log('Next Button >>>>>>>>')

            nextSlide()
        })
    }

    if (prevButton !== null) {
        prevButton.addEventListener('click', function(e) {
            e.preventDefault()

            prevSlide()
        })
    }

    function nextSlide() {
        index +=1 
        if (index === images.length) {
            index = 0 
        }

        console.log('next slide', index, slideWidth)
        console.log(images.length)
        slidesInner.style.transform = `translate3d(${index * -slideWidth}px,0,0)`
    }

    function prevSlide() {
        if(index < 0) {
            index = images.length -1
        } else  {
            index -= 1
        }
        slidesInner.style.transform = `translate3d(${index * -slideWidth}px,0,0)`
    }

    setInterval(function() {
        nextSlide()
    }, 5000)
    

    }) ()

//QUIZ IN SLIDES 3 & 4 

 const quizContainer = document.getElementById('quiz');
 const resultsContainer = document.getElementById('results');
 const submitButton = document.getElementById('submit');

 const myQuestions = [
    {
        question: "What color is the sky?",
        answers: {
            a: "Red", 
            b: "Yellow", 
            c: "Blue"
        },
        correctAnswer: "c"
    },
    {
        question: "Where is Waldo?",
        answers: {
            a: "Exploring the Pacific Ocean",
            b: "Sitting in a tree", 
            c: "Minding his own business"
        },
        correctAnswer: "c"
    }
];

 function buildQuiz(){
     const output = [];

     myQuestions.forEach(
         (currentQuestion, questionNumber) => {
             const answers = [];

             for(letter in currentQuestion.answers){
                 answers.push(
                     `<label>
                         <input type="radio" name="question${questionNumber}" value="${letter}">
                             ${letter} :
                             ${currentQuestion.answers[letter]}
                     </label>`
                 );
             }

             output.push(
                 `<div class="slide">
                 <div class="question"> ${currentQuestion.question} </div>
                 <div class="answers"> ${answers.join('')} </div>
                 </div>`
             );
         }
     );

     quizContainer.innerHTML = output.join('');
 }

 function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {
        
        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question'+questionNumber+']:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer===currentQuestion.correctAnswer){
            numCorrect++;

            answerContainers[questionNumber].style.color = 'lightgreen';
        }

        else {
            answerContainers[questionNumber].style.color= "red"; 
        }
    });

    resultsContainer.innerHTML = numCorrect + 'our of' + myQuestions.length;
 }


 buildQuiz();

 submitButton.addEventListener('click', showResults);


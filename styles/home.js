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


    var myQuestions = [
        { 
            question: "What is your favorite day of the week?",
            answers: {
                a: 'Monday',
                b: 'Tuesday',
                c: 'Wednesday',
                d: 'Thursday', 
                e: 'Friday',
                f: 'Saturday', 
                g: 'Sunday'
            }  
        },
        {
            question: "Which color do you prefer?",
            answers: {
                a: 'Yellow', 
                b: 'Brown', 
                c: 'Green', 
                d: 'Orange',
                e: 'Pink',
                f: 'Indigo',
                g: 'Red'
            }
        },
        {
            question: "Pick a number", 
            answers: {
                a: '90',
                b: '2',
                c: '17',
                d: '8',
                e: '3',
                f: '354',
                g: '100'
            }
        },
    ];

    const quizContainer = document.getElementById('#quiz')
    const resultsContainer = document.getElementById('#results')
    const submitButton = document.getElementById('#submit')

    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)

    function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

        function showQuestions(questions, quizContainer){
           var output = [];
           var answers;

           for(var i=0; i<questions.length; i++){
               answers = [];

               for(letter in questions[i].answers){
                   answers.push(
                       '<label>'
                       + '<input type="radio" name="questions '+i+'" value="'+letter+'">'
                       + letter + ': '
                       + questions[i].answers[letter]
                    + '</label>'
                   );
               }

               output.push(
                   'div class="questions">' + questions[i].question + '</div>'
                   + '<div class="answers">' + answers.join('') + '</div>'
               );
           }

           quizContainer.innerHTML = output.join('');
        }


        function showResults(questions, quizContainer, resultsContainer){
            var answerContainers = quizContainer.querySelectorAll('.answers');

            var userAnswer = '';

            for(var i=0; i<questions.length; i++){
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            }

        showQuestions(questions, quizContainer);

        submitButton.onclick = function(){
            showResults(questions, quizContainer, resultsContainer);
        }

        } 
    }





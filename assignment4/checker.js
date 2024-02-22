function checkAnswers() {
    var forms = document.querySelectorAll('.quizForm');

    forms.forEach(function(form, index) {
        var selectedValue = form.querySelector('input:checked');

        if (selectedValue) {
            var correctAnswer = getCorrectAnswer(index + 1);
            if (selectedValue.value === correctAnswer) {
                form.classList.add('correct'); //Changes the div background color to let the user know if correct or incorrect.
                form.classList.remove('incorrect');
            } else {
                form.classList.add('incorrect');
                form.classList.remove('correct');
            }
        } else {
            alert("Please answer all questions.");
        }
    });
}

function getCorrectAnswer(questionNumber) {
    // I have the correct answers here to check for the correct
    var correctAnswers = {
        1: "Sep_2001", // Correct answer for Question 1
        2: "Studio_Ghibli",  // Correct answer for Question 2
        3: "Pipeline",  // Correct answer for Question 3
        4: "All"  // Correct answer for Question 4
        
    };

    return correctAnswers[questionNumber];
}
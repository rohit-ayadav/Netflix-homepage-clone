document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.icon');


            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';


            icon.textContent = icon.textContent === '+' ? '×' : '+';
        });
    });


    document.getElementById("myForm").addEventListener("submit", function (event) {

        event.preventDefault();


        var emailValue = document.getElementById("email").value;


        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            alert("Please enter a valid email address.");
            return;
        }




        window.location.href = "test.html";
    });
});

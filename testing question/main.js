const questions = document.querySelectorAll(".question");

questions.forEach(function (item) {
    const btn = item.querySelector(".question-btn");

    btn.addEventListener("click", function () {
       
       questions.forEach(function (question) {
           if (question !== item) {
               question.classList.remove("show-text")
           }
        }) 
           item.classList.toggle("show-text")
        })
})
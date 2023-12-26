const navToggle = document.querySelector('.nav-toggle')
const link = document.querySelector(".link")

navToggle.addEventListener("click",()=>{
    link.classList.toggle("show-links")
})
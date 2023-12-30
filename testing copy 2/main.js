const linkcontainer = document.querySelector(".link-container")
const navtoggle = document.getElementById("nav-toggle")
navtoggle.addEventListener("change",()=>{
    linkcontainer.classList.toggle("show-link")
})

console.log(navtoggle)
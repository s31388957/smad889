// date
const dateyear = document.getElementById("date")
dateyear.innerHTML=new Date().getFullYear()

const linkcontainer = document.querySelector(".link-container")
const links = document.querySelector(".links")
const navtoggle = document.getElementById("nav-toggle")
navtoggle.addEventListener("change",()=>{
    // linkcontainer.classList.toggle("show-link")
const containerHeight = linkcontainer.getBoundingClientRect().height
const linksHeight = links.getBoundingClientRect().height
console.log(containerHeight)
if (containerHeight === 0){
    linkcontainer.style.height = `${linksHeight}px`
    console.log(linkcontainer)
} else {
    linkcontainer.style.height = 0;
    console.log(linkcontainer)
}
})


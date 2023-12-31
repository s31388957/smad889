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

if (containerHeight === 0){
    linkcontainer.style.height = `${linksHeight}px`
    console.log(linkcontainer)
} else {
    linkcontainer.style.height = 0;
    console.log(linkcontainer)
}
})

    const navBar = document.getElementById("nav")
    const topLink = document.querySelector(".top-link")

    window.addEventListener("scroll",()=>{
        const scrollHeight = window.scrollY
        const navHeight = navBar.getBoundingClientRect().height;
        if(scrollHeight>navHeight) {
            navBar.classList.add("fixed-nav")
        } else {
            navBar.classList.remove("fixed-nav")
        }

        if(scrollHeight>500){
            topLink.classList.add("show-link");
        } else {
            topLink.classList.remove("show-link");

        }
    })

    //all sroll link close navbar
    const scrollLinks = document.querySelectorAll(".sroll-link")
    scrollLinks.forEach(function(link){
        link.addEventListener("click",function(e){
            e.preventDefault()
            // navigate to specific spot
            const id = e.currentTarget.getAttribute("href").slice(1)
            const element = document.getElementById(id)
            const navHeight = navBar.getBoundingClientRect().height
            const containerHeight = linkcontainer.getBoundingClientRect().height
            const fixedNav = navBar.classList.contains("fixed-nav")

            let position = element.offsetTop-navHeight;
            if(!fixedNav){
                position=position-navHeight
            }
            console.log(navHeight)
            if(navHeight>82) {
                position = position+containerHeight
            }

            window.scrollTo({
                left:0,
                top:position,
            })
            linkcontainer.style.height = 0
        })
    })
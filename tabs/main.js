const titleContent = document.querySelectorAll(".title-content")
const textContainer = document.querySelectorAll(".text-container")
// loading first title and content
document.addEventListener("DOMContentLoaded",()=>{
    titleContent[0].classList.add("active")
    textContainer[0].classList.add("active")
    //set title-content data.id
    
    titleContent.forEach((title)=>{
        title.dataset.id = title.textContent
    })
    // set text-container id
    textContainer.forEach((container)=>{
        container.id = container.firstElementChild.textContent
    })

})
//set function remove classname="active"
function removeClass(content){
    content.forEach((title)=>{
        title.classList.remove("active")
    })
}

const titleContainer = document.querySelector(".title-container")
titleContainer.addEventListener("click",(event)=>{
    removeClass(titleContent)
    removeClass(textContainer)
    if(!event.target.classList.contains("active")) {
        const eventElement =  event.target
        eventElement.classList.add("active")
        //select text-container
        textContainer.forEach((title)=>{
            if(eventElement.dataset.id == title.id){
                title.classList.add("active")
                console.log(eventElement.dataset.id)
            }
        })
     
    }

})

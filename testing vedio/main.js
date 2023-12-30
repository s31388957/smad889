const video = document.querySelector("#myVideo")
const control = document.querySelector(".control")

control.addEventListener("change",(e)=>{
    const vd =e.target.parentElement.previousElementSibling.previousElementSibling
    if(e.target.checked){
        vd.play()
    } else {
        vd.pause()
    }
    console.log(e)
    console.log(e.target)

})

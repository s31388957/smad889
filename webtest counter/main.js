const numc = document.getElementById("num")
let num = parseInt(numc.textContent)
const btn = document.querySelectorAll(".btn")

function updateNum(value) {
    num += value;
    numc.textContent=num;
}
btn.forEach((btn,index)=>{
    btn.addEventListener("click", (event)=>{
        if(index===0){
            updateNum(-1);
        } else if(index===1) {
            num=0;
            numc.textContent=num;
        } else if(index===2){
            updateNum(1)
        }

    })
})

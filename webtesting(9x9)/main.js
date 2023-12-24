
//成功//
const a = (x=1,y=9) =>{
   
    let arr=[]
    while(x<=y){
    for(let a=1 ;a<=y;a++){
       let result = x*a
       arr.push(`${x} X ${a} = ${result}`)
    }
    
    x++
}
return arr
}
let yvalue=9
let con=a(1,9)

let sec=[]
for(let i = 0;i<9;i++){
    const contain1 = document.getElementById("contain1")
 
  sec.push(`section${i}`)
  let sect1 = document.createElement("section")
  sect1.setAttribute("id",sec[i])
  sect1.setAttribute("class","part1")
contain1.appendChild(sect1)
let secadd = document.getElementById(`${sec[i]}`)


    for(let j=0;j<con.length/yvalue;j++){
    let p1 = document.createElement("p")
    p1.textContent = con[i*yvalue+j] 
  
    
    secadd.appendChild(p1)
    }
}



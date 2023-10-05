let content=document.getElementById("content")
let btnAdd=document.getElementById("add")
let boxs=document.querySelectorAll(".box")
let drag=null
btnAdd.onclick=function(){
    if(content.value!=""){
        boxs[0].innerHTML+=`
        <p class="item" draggable="true">${content.value}</p>
        `  
        content.value=""
    }
   dragItem()
}
function dragItem(){
    let items=document.querySelectorAll(".item")
    items.forEach(item=>{
       item.addEventListener("dragstart" , function(){
        drag=item
        item.style.opacity="0.5"
       })

       item.addEventListener("dragend" , function(){
        drag=null
        item.style.opacity="1"
       })

       boxs.forEach(box=>{
        box.addEventListener("dragover" , function(e){
          e.preventDefault()
          this.style.background="#090"
          this.style.color="#fff"
        })
        box.addEventListener("dragleave" , function(){
          this.style.background="#fff"
          this.style.color="#000"
        })
        box.addEventListener("drop" , function(){
          this.append(drag)
          this.style.background="#fff"
          this.style.color="#000"
        })
       })
        
       })
    
}



// boxs.forEach(box=>{
//     box.addEventListener("dragover " , function(){
//       console.log("hello")
//     })
const panels = Array.from(document.querySelectorAll(".panel"))
console.log(panels);

panels.forEach(function(panel){
    panel.addEventListener("click",function(){
        panel.classList.toggle("open") 
    })
    panel.addEventListener("transitionend", function (e) {
        if(e.propertyName.includes("font")){
            
            panel.classList.toggle("open-active") 
        }
    })
    
})


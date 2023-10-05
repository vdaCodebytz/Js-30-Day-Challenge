let rect = document.querySelector(".rect")

let rectPosi = rect.getBoundingClientRect()

rect.addEventListener("mousemove",function(event){
    let mouseCentPosi = rect.clientWidth/2 - (event.clientX - rectPosi.left)
    if(mouseCentPosi>0){
        let redIntensity = (255/(rect.clientWidth/2))*mouseCentPosi
        rect.style.backgroundColor = `rgb(${redIntensity},0,0,${redIntensity/255})`
    }
    else{
        let blueIntensity = ((255/(rect.clientWidth/2))*mouseCentPosi)*(-1)
        rect.style.backgroundColor = `rgb(0,0,${blueIntensity},${blueIntensity/255})`
    }
})
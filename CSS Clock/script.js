const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

setInterval(()=>{
    let date  = new Date
    let secondsDegree = (date.getSeconds())*6
    let minteDegree = (date.getMinutes())*6
    let hourDegree = (date.getHours()%12)*30
    secondHand.style.transform = `rotate(${secondsDegree + 90}deg)`
    minuteHand.style.transform = `rotate(${minteDegree+ (secondsDegree/60)+90}deg)`
    hourHand.style.transform = `rotate(${hourDegree+ ((minteDegree/360)*30) +90}deg)`
},1000)
const inputs = document.querySelectorAll(".controls input")
const root = document.querySelector(":root")

console.log(root);


function handleUpdate(){
   
    root.style.setProperty(`--${this.name}`,`${this.value}${this.dataset.sizing}`)
}

inputs.forEach((input) => {
    input.addEventListener("mousemove",handleUpdate)
    input.addEventListener("change",handleUpdate)
})
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];


bands.sort((a,b)=>{
    const name_arr_a = a.split(" ")
    const name_arr_b = b.split(" ")

    if(name_arr_a[0] === "A" || name_arr_a[0] === "An" || name_arr_a[0] === "The"){
        name_arr_a.shift()
        a = name_arr_a.join(" ")
    }
    
    if(name_arr_b[0] === "A" || name_arr_b[0] === "An" || name_arr_b[0] === "The"){
        name_arr_b.shift()
        b = name_arr_b.join(" ")
    }
    if(a>b){
        return 1
    }
    else{
        return -1
    }

})

const list = document.querySelector("#bands")

bands.forEach((band) => {
    list.innerHTML += `<li>${band}</li>`
})
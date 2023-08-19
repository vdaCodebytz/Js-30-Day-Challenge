const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = []
fetch(endpoint)
.then((response) => {
    return response.json();
})
.then((data)=>{
    cities = data
    cities.forEach(item => {
        item["city"] = item.city.toLowerCase()
        item["state"] = item.state.toLowerCase()
    });
    // filter(cities)
})
.catch((error) => {console.log(`ERROR ${error} OCCURRED`);})

const elem = document.querySelector(".search")
const sugg = document.querySelector(".suggestions")

function filter(dataset){
    const inputVal = elem.value.toLowerCase()
    let reducedDataset = dataset.filter((item) => item.city.includes(inputVal) || item.state.includes(inputVal))
    console.log(reducedDataset);
    sugg.innerHTML = ""
    for (let i = 0; i < Math.min(13,reducedDataset.length); i++) {

        const regex = new RegExp(inputVal,"gi")
        const cityName = reducedDataset[i].city.replace(regex, `<span class='hl'>${inputVal}</span>`)
        const stateName = reducedDataset[i].state.replace(regex, `<span class='hl'>${inputVal}</span>`)
        sugg.innerHTML = sugg.innerHTML + `<li><span>${cityName},${stateName}</span> <span>${reducedDataset[i].population}</span></li>`
        
    }
    if (inputVal === "") {
        sugg.innerHTML = ""
    }
    
}

elem.addEventListener("keyup",()=>{filter(cities)})

console.log("hello")
const inputlocation= document.getElementById("inputlocation")
console.log(inputlocation.value)

const result= document.getElementById("result")

async function searchlocation(){
    console.log()
    var value=inputlocation.value
    console.log(value)
    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)

    console.log(res)

    const data= await res.json()
    console.log(data)

    result.style.backgroundColor="white"

    result.innerHTML=`<div class="name">
    <h3>Weather of ${data.name}</h3>
</div>
<div class="details">
    <p>Sky Conditions: <a>${data.weather[0].description}</a></p>
    <p>Temperature: <a>${data.main.temp}C</a></p>
    <p>Wind Speed: <a>${data.wind.speed} km/h </a></p>
</div>`
  
}
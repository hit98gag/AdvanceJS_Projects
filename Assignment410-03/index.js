const mealinput= document.getElementById("mealinput")
const result= document.getElementById("result")

async function mealfinder(){
    result.innerHTML=""
    var value= (mealinput.value)


    const res=  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
     const data= await res.json()
     data.meals.map((ele)=>{
        console.log(ele)
        var image=ele.strMealThumb
        result.innerHTML +=`<img src=${image} alt="">`

     })
   


}
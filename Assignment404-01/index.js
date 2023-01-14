const planet = [
    { planetname: "Sun", gravity: 27.9, image: "images/sun.png" },
    { planetname: "Moon", gravity: 0.1655, image: "images/moon.png" },
    { planetname: "Earth", gravity: 9.8, image: "images/earth.png" },
    { planetname: "Mercury", gravity: 0.377, image: "images/mercury.png" },
    { planetname: "Jupiter", gravity: 24.5, image: "images/jupiter.png" },
    { planetname: "Saturn", gravity: 1.139, image: "images/saturn.png" },
    { planetname: "Neptune", gravity: 1.148, image: "images/neptune.png" },
    { planetname: "Uranus", gravity: 0.917, image: "images/uranus.png" },
    { planetname: "Mars", gravity: 3.7, image: "images/mars.png" },
    { planetname: "Venus", gravity: 8.87, image: "images/venus.png" },

]


planet.map((ele) => {
    var select = document.getElementById("selectplanet")
    var options = document.createElement("option")
    options.innerHTML = ele.planetname
    options.value = ele.gravity
    options.setAttribute("name", ele.image)
    select.appendChild(options)
    options


})

function calculate() {
    var lower = document.getElementById("lowercon")
    lower.innerHTML = ""

    var mass = +document.getElementById("mass").value
    var maindiv = document.createElement("div")
    maindiv.classList.add("content")
    lower.appendChild(maindiv)
    if(mass==0){
        var alert = document.createElement("div")
        alert.classList.add("alert")
        maindiv.appendChild(alert)
        var h1=document.createElement("h1")
        alert.appendChild(h1)
        h1.innerText=`"Mass is Required"`
        h1.style.color="black"
        h1.style.backgroundColor="white"

    }
    else{
        var select = document.getElementById("selectplanet")
        var index = select.selectedIndex
        var selectoption = select.options[index]
        var gravity = +selectoption.value
        var weight = mass * gravity
        var image = selectoption.getAttribute("name")
       
        var imgdiv = document.createElement("div")
        imgdiv.classList.add("imgcontent")
        maindiv.appendChild(imgdiv)
        var imgtag = document.createElement("img")
        imgtag.src = image
        imgtag.style.width = "95%"
        imgtag.style.height = "95%"
        imgdiv.appendChild(imgtag)
        var weightdiv = document.createElement("div")
        weightdiv.classList.add("wtcontent")
        maindiv.appendChild(weightdiv)
        var wtpara = document.createElement("h3")
        wtpara.innerHTML = `the weight of the object ${select.options[index].innerHTML}`
        weightdiv.appendChild(wtpara)
        var wtval = document.createElement("h2")
        wtval.innerHTML = `${weight.toFixed(2)} W`
        weightdiv.appendChild(wtval)

       document.getElementById("mass").value=""
        

    
    }
}
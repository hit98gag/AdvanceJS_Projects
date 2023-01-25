console.log("hello")

const heading= document.getElementById("heading")
console.log(heading);
const author= document.getElementById("author")
console.log(author);

 async function nextquotes(){

    const res= await fetch(`https://api.quotable.io/random`)
    console.log(res)

    const data= await res.json()
    console.log(data)

    heading.innerHTML= ` <i class="fa fa-quote-left" aria-hidden="true"></i> ${data.content} <i class="fa fa-quote-right" aria-hidden="true"></i>`
    author.innerHTML= ` ~ ${data.author}`


}

nextquotes()
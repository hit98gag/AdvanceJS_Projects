console.log("emojiList")
var table= document.getElementById("table")
emojiList.map((ele)=>{
    table.innerHTML+=`
            <div id="tr">
            <div id="emoji">${ele.emoji}</div>
            <div id="tag">${ele.aliases}</div>
            <div id="descp">${ele.description}</div>
        </div>`

})



function searchemojee(){
        table.innerHTML=""

    var input= document.getElementById("input").value
    const tagsarr= []
    emojiList.map((ele)=>{
       
        if(ele.tags.includes(input)){
            tagsarr.push(ele.tags)
            table.innerHTML+=`
            <div id="tr">
            <div id="emoji">${ele.emoji}</div>
            <div id="tag">${ele.aliases}</div>
            <div id="descp">${ele.description}</div>
        </div>`

    
        }
    })

}

function searchemojeekeyup(){
    table.innerHTML=""
    var input= document.getElementById("input").value
    const tagsarr= []
    emojiList.map((ele)=>{
        ele.tags.map((element)=>{
               
        if(element.startsWith(input)){
            tagsarr.push(element)
            table.innerHTML+=`
            <div id="tr">
            <div id="emoji">${ele.emoji}</div>
            <div id="tag">${ele.aliases}</div>
            <div id="descp">${ele.description}</div>
        </div>`

    
        }

        })
    
    })

}
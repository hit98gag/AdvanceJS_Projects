hello();
async function hello() {
  // console.log("hello");
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=786a7a56f0d54f3db39575a0bc4b2882"
  );
  // console.log(response);
  const data = await response.json();

  // console.log(data);

  const lowerContainer = document.getElementById("lowerContainer");

  for (let i = 0; i < 10; i++) {
    lowerContainer.innerHTML += `
   
       <div class = "SubLower"> 
            <div class = "leftSide">
               <img src="${data.articles[i].urlToImage}" alt=""> 
            </div>
     
          
     
            <div class = "rightSide" id="rightSide">
            <div class = "Heading" id="a"> 
            <h3> ${data.articles[i].title} </h3>
            </div>
            <div class = "source" id="b">
            <p class=Short > <strong class="strong">short</strong> by ${data.articles[i].author || "No Author"} | ${new Date(data.articles[i].publishedAt)}</p>
            </div>
            <div class = "article" id="c">
              ${data.articles[i].description}
            </div>
            <div class = "more" id="d"> 
            <p>read more at <a class="readm" target="_blank" href="${data.articles[i].url}">${data.articles[i].source.name}</a>  </p>
            </div>
        </div>
   
     </div>`;
  }
}

async function Sports(k) {
  lowerContainer.innerHTML = "";
  closeNav();
  console.log(k);

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${k}&apiKey=2fa0563fa1a4419da31dd04077630319`
  );
  console.log(response);

  const data = await response.json();
  console.log(data);

  for (let i = 0; i < 10; i++) {
    lowerContainer.innerHTML += `
   
       <div class = "SubLower"> 
            <div class = "leftSide">
               <img class="dynImg" src="${data.articles[i].urlToImage}" alt=""> 
            </div>
     
          
     
                  <div class = "rightSide" id="rightSide">
                       <div class = "Heading" id="a"> 
                       <h3 class="Heading1"> ${data.articles[i].title} </h3>
                       </div>
                       <div class = "source" id="b">
                       <p class=Short > <strong class="strong" >short</strong> by ${data.articles[i].author || "No Author"} | ${new Date(data.articles[i].publishedAt)}</p>

                       </div>
                       <div class = "article" id="c">
                        <p class="descrip"> ${data.articles[i].description} </p>
                       </div>
                       <div class = "more" id="d"> 
                       <p>read more at <a class="readm" target="_blank" href="${data.articles[i].url}">${data.articles[i].source.name}</a>  </p>

                       </div>
                   </div>
   
     </div>`;
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

{/* <p>read more at <a class="readm" target="_blank" href="${data.articles[i].url}">${data.articles[i].source.name}</a>  </p> */}

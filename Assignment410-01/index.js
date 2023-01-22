const searchInput = document.getElementById("searchBox");
const profileContainer = document.getElementById("profileContainer");
// console.log(searchInput, searchButton);
async function func2() {
    const Response = await fetch("https://api.github.com/users");
  
    const data = await Response.json();
    profileContainer.innerHTML=""
    data.map((ele) => {
      // console.log(ele);
  
      profileContainer.innerHTML +=`<div class="pro">
              <img class="image" src = ${ele.avatar_url}/> 
             <div>
               <h3 class="name"> ${ele.login}</h3>
               <a class= "link" href=${ele.html_url}>view Profile</a>             
               </div>
      </div>`;
    });
  }

  func2();

async function func() {
  const searchValue = searchInput.value;
  console.log(searchValue);
  const Response = await fetch(`https://api.github.com/search/users?q=${searchValue}`);
  // console.log(Response);

  const data = await Response.json();
  // console.log(data.items);
  profileContainer.innerHTML="";

  data.items.map((ele) => {
    // console.log(ele);
    profileContainer.innerHTML +=`<div class="pro">
            <img class="image" src = ${ele.avatar_url}/> 
           <div>
             <h3 class="name"> ${ele.login}</h3>
             <a class= "link" href=${ele.html_url}>view Profile</a>             
          </div>
    </div>`;
  });
}


function clearfun(){

    profileContainer.innerHTML=""
    func2()
}
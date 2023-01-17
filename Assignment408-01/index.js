var counter =0;

function AppPlayerDetails() {
  const firstName = document.getElementById("firstName").value;

  const LastName = document.getElementById("LastName").value;
  const Country = document.getElementById("Country").value;
  const Score = +document.getElementById("Score").value;
  const container = document.getElementById("container");
  const para = document.getElementById("para")

  var table = document.getElementById("table");

  if (firstName == "" || LastName == "" || Country == "" || Score == "") 
  {
    para.innerHTML = "";
    para.innerHTML = "Please check all input fields";
    para.style.fontSize="1.5rem"
    para.style.color="red"

  } 
  else {
    para.innerHTML = "";
  
    table.innerHTML += `

    <div class="tr" id="tr${counter}">
      <div class="td" id="full">${firstName + "  " + LastName}</div>
      <div class="td" id="country"> ${Country}</div>
      <div class="td" id="scoreRow${counter}"> ${Score} </div>
    
      <div class="btn">
        <button class="btnStyle" id="deleted${counter}"onclick="deleted(${counter})"><i class="fa-sharp fa-solid fa-trash"></i></button>
       <button class="btnStyle" id="plusFive${counter}" onclick="plusFive(${counter})">+5</button>
       <button class="btnStyle" id="minusFive${counter}" onclick="minusFive(${counter})">-5</button>
       </div>
     </div>
   
  `;
  console.log(counter);

  counter = counter+1;
  document.getElementById("firstName").value = "";
  document.getElementById("LastName").value = "";
  document.getElementById("Country").value = "";
  document.getElementById("Score").value = "";
  
  }
 
}

function deleted(counter){
  const trow = document.getElementById(`tr${counter}`);
  const delElem = document.getElementById(`deleted${counter}`)
  trow.remove();
}

function plusFive(counter){

  const score =document.getElementById(`scoreRow${counter}`)

  score.innerText = +score.innerText +5 
}

function minusFive(counter){

  const score =document.getElementById(`scoreRow${counter}`)

  score.innerText = +score.innerText -5 
}

function Submit(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password =document.getElementById("password").value;
    const Telephone = document.getElementById("Telephone").value;
    const bio = document.getElementById("bio").value;
    const submit = document.getElementById("submit").value;



   const ferror = document.getElementById("ferror");
   if(firstName.length<3 ||firstName.length>16 ){
    ferror.innerHTML = "First Name must be alphanumeric and contain 3-16 characters"
   }
    else {
      ferror.innerHTML = "";
    }


    const lerror = document.getElementById("lerror");

    if(lastName.length<3 ||lastName.length>16 ){
    lerror.innerHTML = "Last Name must be alphanumeric and contain 3-16 characters"
   }
   else {
    lerror.innerHTML = "";
  }

   const emailError = document.getElementById("emailError");

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) )
   
    {
    emailError.innerHTML = "Email must be a valid address, eg.example@example.com"
     
   }
   else {
    emailError.innerHTML = ""
   }

   const passError = document.getElementById("passError");

   if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password))){
    passError.innerHTML = "Password must be alpha numeric"
   }
   else {
    passError.innerHTML=""
   }

   const teleerror =  document.getElementById("teleerror");
   if(Telephone.length < 11 || !(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).test(Telephone)){
    teleerror.innerHTML = "A valid Telephone Number (11 digits and 333-333-3334)"
   }
   else {
    teleerror.innerHTML ="";
   }

   const bioerror = document.getElementById("bioerror");
   if ( bio.length < 8 || bio.length > 50 ){
     bioerror.innerHTML =  "bio must contain only lowercase letters, underscores, hyphensand be 8-50 characters"
   }
   else {
    bioerror.innerHTML ="";
   }
  
}

async function Hello() {
    const lowerContainer = document.getElementById("lowerContainer")

    const response = await fetch("https://kontests.net/api/v1/all")
    console.log(response);

    const data = await response.json();
    console.log(data);

    for(let i=0;i<data.length;i++){
        let month = ` ${new Date(data[i].start_time).getMonth()}`
        let day = ` ${new Date(data[i].start_time).getDay()}`
        let year = ` ${new Date(data[i].start_time).getFullYear()}`
        let date =month+'/'+day+'/'+year
        let hour = `${new Date(data[i].start_time).getUTCHours()}`
        let minute = `${new Date(data[i].start_time).getUTCMinutes()}`
        let sec = `${new Date(data[i].start_time).getUTCSeconds()}`
        let Time = hour+':'+minute+':'+sec
        var k;
        if(hour>12){
            k='PM'
        }
        else {
            k = 'AM'
        }
        
        let months = ` ${new Date(data[i].end_time).getMonth()}`
        let days = ` ${new Date(data[i].end_time).getDay()}`
        let years = ` ${new Date(data[i].end_time).getFullYear()}`
        let dates =months+'/'+days+'/'+years
        let hours = `${new Date(data[i].end_time).getUTCHours()}`
        let minutes = `${new Date(data[i].end_time).getUTCMinutes()}`
        let secs = `${new Date(data[i].end_time).getUTCSeconds()}`
        let Times = hours+':'+minutes+':'+secs
        var k;
        if(hour>12){
            k='PM'
        }
        else {
            k = 'AM'
        }
    lowerContainer.innerHTML+=
   ` 
   
   <div class="subContainer">
    <div class="projectName"><h3> ${data[i].name} </h3> </div>

        

    <div class="startTime"><p> <b>Start Time:</b> ${date}, ${Time} ${k} </p> </div>
    <div class="endTime"><p> <b>End Time:</b> ${dates}, ${Times} ${k} </p> </div>
    <div class="duration"><p><b>Duration:</b>${data[i].duration} </p></div>
    <div class="WebStatus">
       <div class="webSite"><p><b>Website:</b> <br><a target =_blank href="${data[i].url}">${data[i].site}</a>
       </p></div>
       <div class="Status"><b>Status:</b><br> ${data[i].status}</div>
    </div>
    </div> 
   
    `   
    }
}

Hello()
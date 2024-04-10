//Initialise hrs,min,and sec to html document file
let hrs= document.getElementById("hrs");
let min= document.getElementById("min");
let sec= document.getElementById("sec");

//for updete time
 setInterval(()=>{
    //For cuurent time
    let currentTime= new Date();
    //for hrs
    hrs.innerHTML= (currentTime.getHours()<10 ?"0" :"")+currentTime.getHours();
    //for mins
    min.innerHTML=(currentTime.getMinutes()<10 ?"0" :"")+currentTime.getMinutes();
    //for secs
    sec.innerHTML=(currentTime.getSeconds()<10 ?"0" :"")+currentTime.getSeconds();
    //1000 means = 1sec after update time
 },1000);
 
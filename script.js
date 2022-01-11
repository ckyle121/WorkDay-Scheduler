// Display Current Date & Time with Moment.js
currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDay);

// color code time blocks to indicate whether time is in the past, present, or future
function colorTime(){
    // if color is in past add class past
    // if color is current add class present and class hour
    // if color is future time add class future 
}


// Enter tasks and save to local storage
localStorage.setItem("tasks", JSON.stringify());


// tasks appear from local storage after refresh 
localStorage.getItem("tasks")
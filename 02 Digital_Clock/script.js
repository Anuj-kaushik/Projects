const clock = document.getElementById('clock')

// let date = new Date()
// console.log(date.toLocaleTimeString());

//everytime when we execute it , it will display the current time in the window
//but we want to change the time in every second

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString()); // it display output in window
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
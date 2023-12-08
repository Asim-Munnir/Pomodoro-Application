//varibles collect
let workTittle = document.getElementById('work')
let breakTittle = document.getElementById('break')



let workTime = 25;
let breakTime = 5;

let seconds = "00";

//dsiplay

window.onload =() =>{
        document.getElementById('minutes').innerHTML = workTime;
        document.getElementById('seconds').innerHTML = seconds;

        workTittle.classList.add('active')
}
//start timer
function start() {
    alert('Your Work Time Start ow')
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";
    //cahnge time to click play button
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    //countDown 
    let timerFunction = () =>{

        //change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // start the time 
        seconds = seconds - 1;

        if (seconds === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes == -1) {
                if (breakCount % 2 == 0) {
                    //start braek
                    workMinutes = breakMinutes
                    breakCount++;
                    // change the panel
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }
                else{
                    // countinue work
                    workMinutes = workTime
                    breakCount++;
                    // cahnge the panel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                    
                }
                
            }
            seconds = 59;
        }

    }

    //start Countdown
    setInterval(timerFunction, 1000) // 1000 = 1sec
 
}
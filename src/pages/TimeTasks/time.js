//Timer part
const timerMinutes = document.querySelector(".timer-minutes"),
      timerSeconds = document.querySelector(".timer-seconds"),
      timerStart = document.querySelector(".start-timer");

const startTimer = () => {
    if(timerMinutes.value === '' && timerSeconds.value === '') return
    if(timerSeconds.value === '' && timerMinutes.value !== '') timerSeconds.value = 0;
    if(timerSeconds.value !== '' && timerMinutes.value === '') timerMinutes.value = 0;

    if(parseInt(timerMinutes.value, 10) > 60) {
        alert("Max value for minutes is: 60");
        return;
    }

    if(parseInt(timerSeconds.value, 10) > 60) {
        alert("Max value for seconds is: 60");
        return;
    }

    //getting start values into variables
    const mins = timerMinutes.value,
          secs = timerSeconds.value;

    timerMinutes.disabled = true;
    timerSeconds.disabled = true;

    const timerSecondsInterval = setInterval(() => {
        if(timerMinutes.value.length === 1) {
            timerMinutes.value = '0' + timerMinutes.value;
        }

        if(parseInt(timerMinutes.value, 10) === 0 && parseInt(timerSeconds.value, 10) === 0) {
            alert("Timer stopped!");

            //Setting start values when timer is stopped
            timerMinutes.value = mins;
            timerSeconds.value = secs;

            clearInterval(timerSecondsInterval);

            //Enabling inputs 
            timerMinutes.disabled = false;
            timerSeconds.disabled = false;

            return;
        }

        if(parseInt(timerSeconds.value, 10) === 0) {
            timerMinutes.value -= 1;
            timerSeconds.value = 60;
        }
        
        timerSeconds.value -= 1;
    }, 1000);
}

timerStart.addEventListener("click", startTimer);

//Stopwatch part
const stopWatchMili = document.querySelector(".stopwatch-miliseconds"),
      stopWatchSec = document.querySelector(".stopwatch-seconds"),
      stopWatchMin = document.querySelector(".stopwatch-minutes"),
      stopWatchStart = document.querySelector(".sw-start"),
      stopWatchSplit = document.querySelector(".sw-split"),
      stopWatchReset = document.querySelector(".sw-reset"),
      stopWatchPause = document.querySelector(".sw-pause"),
      stopWatchClear = document.querySelector(".sw-clear"),
      stopWatchSplits = document.querySelector(".stopwatch-splits");

      const startStopWatch = () => {
        //Main interval for miliseconds
        const miliInterval = setInterval(() => {
            if(parseInt(stopWatchMili.innerHTML, 10) === 99) {
                stopWatchMili.innerHTML = '00';

                //if seconds is less than 10 we adding 0 to beggining of the seconds:
                if(parseInt(stopWatchSec.innerHTML, 10) < 9) {
                    let counter = parseInt(stopWatchSec.innerHTML, 10) + 1;

                    stopWatchSec.innerHTML = '0' + counter;
                    //if no, we just adding + 1 to seconds:
                } else stopWatchSec.innerHTML = parseInt(stopWatchSec.innerHTML, 10) + 1;
            }

            //checking if the seconds is 60
            if(parseInt(stopWatchSec.innerHTML, 10) === 60) {
                stopWatchSec.innerHTML = '00'; //settings seconds again to 0

                //same shit for minutes like for minutes
                if(parseInt(stopWatchMin.innerHTML, 10) < 10) {
                    let counter = parseInt(stopWatchMin.innerHTML, 10) + 1;
                    stopWatchMin.innerHTML = '0' + counter;
                } else stopWatchMin.innerHTML = parseInt(stopWatchMin.innerHTML, 10) + 1;
            }

            stopWatchMili.innerHTML = parseInt(stopWatchMili.innerHTML, 10) + 1;
        }, 10);

        //Resetting stopwatch
        //clearing interval and applying innerHTML of elements to 00
        //and exiting from the function
        stopWatchReset.addEventListener("click", () => {
            clearInterval(miliInterval);

            stopWatchMili.innerHTML = '00';
            stopWatchSec.innerHTML = '00';
            stopWatchMin.innerHTML = '00';

            return;
        })


    //Add features for two buttons:
    stopWatchPause.addEventListener("click", () => {
            clearInterval(miliInterval);
        })
    }

    //Clear splits:
    stopWatchClear.addEventListener("click", () => {
        stopWatchSplits.innerHTML = "";
        splitCounter = 0;
    })

    //Splits logic:
    let splitCounter = 0;

    //Creating interator to check current split number
    stopWatchSplit.addEventListener("click", () => {
        if(stopWatchMili.innerHTML === '00' && stopWatchSec.innerHTML === '00' && stopWatchMin.innerHTML === '00') return;

        splitCounter++;
    
        let el = document.createElement("p");

        el.innerHTML += `Split №${splitCounter}: ${stopWatchMin.innerHTML}:${stopWatchSec.innerHTML}:${stopWatchMili.innerHTML}`; 

        stopWatchSplits.appendChild(el);
    })

stopWatchStart.addEventListener("click", startStopWatch);
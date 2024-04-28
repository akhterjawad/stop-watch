let minute = document.querySelector('#minute');
let second = document.querySelector('#second');
let milisecond = document.querySelector('#milisecond');
let startbtn = document.querySelector('#startbtn')

let count = 0;
let interval;

function startwatch() {
    document.getElementById("startbtn").disabled = true;
    // console.log("startwatch");
    interval = setInterval(function () {
        count += 1;
        if (count === 60) {
            count = 0;
            milisecond.innerHTML = count;
            second.innerHTML = parseInt(second.innerHTML) + 1;
            if (parseInt(second.innerHTML) === 60) {
                second.innerHTML = '00';
                minute.innerHTML = parseInt(minute.innerHTML) + 1;

            }
        } else {
            milisecond.innerHTML = count < 10 ? '0' + count : count;
        }
    }, 1000);
}

function resetwatch() {
    // console.log("resetwatch");
    clearInterval(interval);
    count = 0;
    minute.innerHTML = '0';
    second.innerHTML = '0';
    milisecond.innerHTML = '0';

}

function stopwatch() {
    document.getElementById("startbtn").disabled = false;
    // console.log("stopwatch");
    clearInterval(interval);
}


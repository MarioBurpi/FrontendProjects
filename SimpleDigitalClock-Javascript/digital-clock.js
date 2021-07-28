function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = "";

    if (hours == 0) {
        hours = 00;
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    setTimeout(showTime, 1000);
}

showTime();
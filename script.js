const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second")

const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds()
if (currentHour > 12) {
currentHour -= 12;
}
    hour.textContent = currentHour.toString();
    minute.textContent = currentMinute.toString().padStart(2,"0");
    second.textContent = currentSecond.toString()
}
setInterval(updateTime, 1000);
updateTime();
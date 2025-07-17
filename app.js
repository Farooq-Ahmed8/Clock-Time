function updateClock(){
    const clock = document.getElementById("clock");
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    clock.textContent = `${hours}:${minutes}:${seconds}`
}
setInterval(updateClock, 1000);
updateClock();
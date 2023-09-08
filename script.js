
function updateDayOfTheWeek(){
    const currentDate = new Date();
    const dayOfWeekNumber = currentDate.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[dayOfWeekNumber];
    document.getElementById('currentDayOfTheWeek').innerHTML = `Current Day of the Week: <strong>${currentDayOfWeek}<strong>`
}

updateDayOfTheWeek()

function updateUTCTime() {
    const utcTimeElement = document.getElementById("currentUTCTime");
    const timestamp = Date.now();
    const currentUTCDate = new Date(timestamp).toUTCString();
    utcTimeElement.innerHTML = `Current UTC Time: <strong>${currentUTCDate}<strong>`
  }
  updateUTCTime();
  setInterval(updateUTCTime, 1000);
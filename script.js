
const currentDate = new Date();
const dayOfWeekNumber = currentDate.getDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayOfWeek = daysOfWeek[dayOfWeekNumber];


const timestamp = Date.now();
const date = new Date(timestamp);
const currentTime = date.toUTCString();

document.getElementById('currentDayOfTheWeek').innerHTML = `Current Day of the Week: ${currentDayOfWeek}`

const UtcTime = document.getElementById('currentUTCTime')
UtcTime.textContent = `Current UTC Time: ${currentTime}`
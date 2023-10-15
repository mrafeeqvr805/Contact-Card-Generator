let month=document.getElementById("month");
let day=document.getElementById("day");
let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");

let target = new Date("Mar 10, 2024 12:00:00 GMT+5:30").getTime();
let months = 0;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
setInterval(counter,1000);


function counter() {
  let current = new Date().getTime();
  let diff = target - current;
  months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

  if (months > 0) {
    diff = diff - months * 1000 * 60 * 60 * 24 * 30;
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    month.textContent=(months<10)?`0${months}`:months;
  }if (days > 0) {
    diff = diff - days * 1000 * 60 * 60 * 24;
    hours = Math.floor(diff / (1000 * 60 * 60));
    day.textContent=(days<10)?`0${days}`:days;
  }if (hours > 0) {
    diff = diff - hours * 1000 * 60 * 60;
    minutes = Math.floor(diff / (1000 * 60));
    hour.textContent=(hours<10)?`0${hours}`:hours;
  }if (minutes > 0) {
    diff = diff - minutes * 1000 * 60;
    seconds = Math.floor(diff / 1000);
    minute.textContent=(minutes<10)?`0${minutes}`:minutes;
    second.textContent=(seconds<10)?`0${seconds}`:seconds;
  }
 
//   console.log(`months: ${months} days: ${days} hours: ${hours} minutes: ${minutes} seconds: ${second}`);
}
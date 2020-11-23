const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentHour = today.getHours();
const currentMinute = today.getMinutes();
const monthDays = document.querySelector(".dates");
const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

// Renders the current month and year in the calendar header
document.querySelector(".date h1").innerHTML =
  months[today.getMonth()] + " " + currentYear;

let dates = "";

// Figures out how many <div>(dates) the calendar should render per month
const lastDayOfMonth = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  0
).getDate();

// a for-loop that renders a div of every day of the current month. Gives a special class to current day.
for (let i = 1; i <= lastDayOfMonth; i++) {
  if (i === today.getDate() && today.getMonth() === today.getMonth()) {
    dates += `<div class="today">${i}</div>`;
  } else {
    dates += `<div>${i}</div>`;
    monthDays.innerHTML = dates;
  }
}

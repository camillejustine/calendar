const date = new Date();
/**
 * Renders the whole calendar, prints months and days to DOM.
 */
const renderCalendar = () => {
  /*
   * Variables
   */

  date.setDate(0); // Ställer in vilken veckodag som är det första datumet på aktuell månad. 0 = Söndag. (TO DO: Verkar vara problem när man skapar kalender som börjar på en måndag)
  const monthDays = document.querySelector(".days");
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const firstDayIndex = date.getDay() || 7 - 1;
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    +1,
    0
  ).getDay();
  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  let days = "";
  // Renders last days for previous month
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
  // Renders days for current month
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }
  // Renders first days for next month
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

window.addEventListener("load", main());

function main() {
  renderCalendar();
  addEventListeners();
}

function addEventListeners() {
  // Arrow for previous month
  document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  // Arrow for next month
  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });
}

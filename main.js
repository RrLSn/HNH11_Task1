//selector

const currentDay = document.querySelector('[data-testid="currentDay"]');
const currentUTC = document.querySelector('[data-testid="currentTimeUTC"]');

//Initialization

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const now = new Date();

const UTCday = now.toUTCString();
const day = now.getDay();

currentUTC.textContent = `CURRENT TIME IN UTC: ${UTCday}`;
currentDay.textContent = `CURRENT DAY: ${daysOfWeek[day].toLocaleUpperCase()}`;

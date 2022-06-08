const file = "https://raw.githubusercontent.com/Hanka8/FM-time-tracking-dashboard/main/data.json";

const titles = document.querySelectorAll(".title");
const times = document.querySelectorAll(".time");
const previousS = document.querySelectorAll(".previous");

const btnDaily = document.getElementById("btnDaily");
const btnWeekly = document.getElementById("btnWeekly");
const btnMonthly = document.getElementById("btnMonthly");

const btns = document.querySelectorAll(".btn");

const getData = async (how) => {
  const data = await fetch(file);
  const dataJson = await data.json();
  //displaying titles
  let titleItr = 0;
  titles.forEach((title) => {
    title.textContent = dataJson[titleItr].title;
    titleItr++;
  });
  //displaying current time
  let weekItr = 0;
  times.forEach((time) => {
    time.textContent = `${dataJson[weekItr].timeframes[how].current}hrs`;
    weekItr++;
  });
  //displaying previous time
  let prevItr = 0;
  previousS.forEach((previous) => {
    previous.textContent = `Last Week - ${dataJson[prevItr].timeframes[how].previous}hrs`;
    prevItr++;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  getData("weekly");
  btnWeekly.classList.add("active");
});

//toggling style to current displayed data
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((buttie) => {
      buttie.classList.remove("active");
    })
    btn.classList.add("active");
  });
});

btnDaily.addEventListener("click", () => {getData("daily");});

btnWeekly.addEventListener("click", () => {getData("weekly")});

btnMonthly.addEventListener("click", () => {getData("monthly")});

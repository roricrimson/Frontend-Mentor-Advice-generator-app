const title = document.querySelector(".title");
const advice = document.querySelector(".advice");
const dice = document.querySelector(".dice");
fetchData();
dice.onclick = () => {
  fetchData();
};

function fetchData() {
  title.innerHTML = "";
  advice.innerHTML = '"....."';

  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then((res) => {
      title.innerHTML = `Advice # ${res.slip.id}`;
      advice.innerHTML = `"${res.slip.advice}"`;
    });
}

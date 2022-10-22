const adviceId = document.querySelector(".advice-id");
const advicePara = document.querySelector(".advice-para");
const dice = document.querySelector(".dice");

fetch(`	https://api.adviceslip.com/advice`)
  .then((res) => res.json())
  .then((res) => {
    var id = res.slip.id;
    var advice = res.slip.advice;

    adviceId.innerHTML = id;
    advicePara.innerHTML = advice;
  });

dice.onclick = () => {
  location.reload();
};

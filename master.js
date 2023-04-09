// Start Let the Varables
let rating_cards = document.querySelectorAll(".ratings span");
let submit_btn = document.querySelector(".submit_btn");
let rate_point = document.getElementById("rate");
let rating_section = document.querySelector(".rating_section");
let thank_section = document.querySelector(".thank_section");
let rate = null;
// End Let the Varables

rating_cards.forEach((rating_card) => {
  rating_card.addEventListener("click", (e) => {
    let active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    let card = e.target;
    card.classList.add("checked");
    rate = e.target.innerText;
    console.log(rate);
  });
});

submit_btn.addEventListener("click", () => {
  if (rate) {
    rate_point.innerText = rate;
    rating_section.classList.add("hidden");
    thank_section.classList.remove("hidden");
  }
});
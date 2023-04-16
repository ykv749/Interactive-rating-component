let mainContainer = document.querySelector(".container");
let thanksContainer = document.querySelector(".thank-you");

let submitButton = document.querySelector("#submit-rating");
submitButton.addEventListener("click", () => {
    mainContainer.classList.add('hidden');
    thanksContainer.classList.remove("hidden");
})

let rateAgain = document.querySelector("#rate-again");
rateAgain.addEventListener("click", () => {
    mainContainer.classList.remove('hidden');
    thanksContainer.classList.add("hidden");
})

let ratings = document.querySelectorAll(".btn");
let actualRating = document.querySelector("#rating");
ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        actualRating.innerHTML = rating.innerHTML
    })
})
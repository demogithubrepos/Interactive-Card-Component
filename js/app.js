const mainContainer = document.querySelector(".main-container");
const successContainer = document.querySelector(".success");
const btnSubmit = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

btnSubmit.addEventListener("click", () => {
    
    successContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})
let counterValue = 0;
const valueElement = document.getElementById("value");
const buttonTakeAway = document.querySelector('[data-action="decrement"]');
const buttonAdd = document.querySelector('[data-action="increment"]');

buttonTakeAway.addEventListener("click", () => {
    counterValue -= 1;
    valueElement.textContent = counterValue;
})

buttonAdd.addEventListener("click", () => {
    counterValue += 1;
    valueElement.textContent = counterValue;
})
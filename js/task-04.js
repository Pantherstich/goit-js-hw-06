let counterValue = 0;
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const value = document.getElementById("value");
increment.addEventListener("click", IncrementClick);
decrement.addEventListener("click", DecrementClick);
function IncrementClick() {
  counterValue = counterValue + 1;
  value.textContent = counterValue;
}
function DecrementClick() {
  counterValue = counterValue - 1;
  value.textContent = counterValue;
}
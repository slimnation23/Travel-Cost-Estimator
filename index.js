const distance = document.querySelector("#distance");
const average = document.querySelector("#average");
const price = document.querySelector("#price");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", () => calculateSum(distance.value, average.value, price.value));

function calculateSum(distance, average, fuelPrice) {
  const totalFuel = (average * distance) / 100;
  const totalCost = Math.floor(totalFuel * fuelPrice);
  return result.innerHTML = totalCost
}

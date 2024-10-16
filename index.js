const distance = document.querySelector("#distance");
const average = document.querySelector("#average");
const price = document.querySelector("#price");
const btn = document.querySelector("#btn");
const result = document.querySelector("#cost-result");
const liters = document.querySelector('#liters')
const kilometers = document.querySelector('#kilometers')
const calculate = document.querySelector('#calculate')
const litersResult = document.querySelector('#liters-result')

btn.addEventListener("click", () => calculateSum(distance.value, average.value, price.value));
calculate.addEventListener("click", () => calculateFuel(liters.value, kilometers.value));

function calculateSum(distance, average, fuelPrice) {
  const totalFuel = (average * distance) / 100;
  const totalCost = Math.floor(totalFuel * fuelPrice);
  return result.innerHTML = totalCost
}

function calculateFuel(liters, kilometers) {
  const averageFuel = Math.floor((liters / kilometers) * 100)
  return litersResult.innerHTML = averageFuel + ' liters'
}

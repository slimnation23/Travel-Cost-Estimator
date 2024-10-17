const distance = document.querySelector("#distance");
const average = document.querySelector("#average");
const price = document.querySelector("#price");
const btn = document.querySelector("#btn");
const result = document.querySelector("#cost-result");
const liters = document.querySelector("#liters");
const kilometers = document.querySelector("#kilometers");
const calculate = document.querySelector("#calculate");
const litersResult = document.querySelector("#liters-result");
const clearAverage = document.querySelector("#clear-average");
const clearCost = document.querySelector("#clearCost");

btn.addEventListener("click", () => calculateSum(distance.value, average.value, price.value));
calculate.addEventListener("click", () => calculateFuel(liters.value, kilometers.value));
clearAverage.addEventListener("click", () => clearAver());
clearCost.addEventListener("click", () => clearTravelCost());

function calculateSum(distance, average, fuelPrice) {
  if (distance > 0) {
    const totalFuel = (average * distance) / 100;
    const totalCost = Math.floor(totalFuel * fuelPrice);
    return (result.innerHTML = totalCost);
  } else {
    return (result.innerHTML = `<div style="color:red; font-weight:400; font-size: 14px">Invalid value</div>`);

  }
}

function calculateFuel(liters, kilometers) {
  if (kilometers > 0) {
    const averageFuel = Math.floor((liters / kilometers) * 100);
    return (litersResult.innerHTML = averageFuel + " liters");
  } else {
    return (litersResult.innerHTML = `<div style="color:red; font-weight:400; font-size: 14px">Invalid value</div>`);
  }
}

function clearAver() {
  liters.value = "";
  kilometers.value = "";
  litersResult.innerHTML = "";
}

function clearTravelCost() {
  distance.value = "";
  average.value = "";
  price.value = "";
  result.innerHTML = "";
}

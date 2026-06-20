const inputBox = document.getElementById("input-box");
const convertBtn = document.getElementById("convert-btn");

let valueInMeters = document.getElementById("value-in-meters");
let valueInGallons = document.getElementById("value-in-gallons");
let valueInKilos = document.getElementById("value-in-kilos");

const inputValue = convertBtn.addEventListener("click", function (e) {
  // console.log("btn clicked");

  const input = inputBox.valueAsNumber;
  // console.log(input);

  valueInMeters.innerHTML = `${inputBox.valueAsNumber} meters = ${(inputBox.valueAsNumber * 3.281).toFixed(3)} feet | ${inputBox.valueAsNumber} feet = ${(inputBox.valueAsNumber / 3.281).toFixed(3)} meters`;
  valueInGallons.innerHTML = `${inputBox.valueAsNumber} litres = ${(inputBox.valueAsNumber * 0.264).toFixed(3)} gallons | ${inputBox.valueAsNumber} gallons = ${(inputBox.valueAsNumber / 0.264).toFixed(3)} litres`;
  valueInKilos.innerHTML = `${inputBox.valueAsNumber} kilos = ${(inputBox.valueAsNumber * 2.204).toFixed(3)} pounds | ${inputBox.valueAsNumber} pounds = ${(inputBox.valueAsNumber / 2.204).toFixed(3)} kilos`;
});

const brand = document.getElementById("brand");
const vinform = document.getElementById("vin-form");
const vinNumber = document.getElementById("vin-number");

// Get the Brand
// brand.addEventListener("change", (event) => {
//   event.preventDefault();
//   console.log(brand.value);
// });

// Get the VIN number
vinform.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(vinNumber.value);
  searchVIN(brand, vinNumber);
});

function searchVIN(brand, vinNumber) {
  console.log("searchVIN");
  window.open(`https://www.bike-parts-honda.es/`, "_blank");
}

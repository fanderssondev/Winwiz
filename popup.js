const brand = document.getElementById("brand");
const vinform = document.getElementById("vin-form");
const vinNumber = document.getElementById("vin-number");


// Get the VIN number
vinform.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(vinNumber.value);
  searchVIN(brand, vinNumber);
});

// Search the site for the VIN
function searchVIN(brand, vinNumber) {
  const URL = getURL(brand, vinNumber);
  window.open(URL, "_blank");
}

// Construct the URL
function getURL(brand, vinNumber) {
  let url = "";
  switch (brand.value) {
    case "honda":
      url =
        `https://www.bike-parts-honda.com/honda-motorcycle/search_vehicle/chassis/${vinNumber.value}+`;
      break;
    case "yamaha":
      url =
        `https://www.bike-parts-yam.com/yamaha-motorcycle/search_vehicle/chassis/${vinNumber.value}+`;
      break;

    default:
      break;
  }
  console.log(url);
  return url;
}
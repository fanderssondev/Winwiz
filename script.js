const brand = document.getElementById("brand");
const vinform = document.getElementById("vin-form");
const vinNumber = document.getElementById("vin-number");
const warning = document.getElementById("warning");
const siteLink = document.getElementById("go-to-site-link");

// Get the VIN number
vinform.addEventListener("submit", (event) => {
  event.preventDefault();

  vinNumber.value = vinNumber.value.trim();

  if (vinNumber.value.length !== 17) {
    warning.innerHTML = `The VIN number is ${vinNumber.value.length} digits long. Needs to be 17 digits`;
  } else {
    const URL = getURL(brand, vinNumber);
    // searchVIN(URL);
    siteLink.innerHTML = `<a href=${URL} target="_blank">Go to site</a>`;
  }
});

// Opens the target site
function searchVIN(URL) {
  window.open(URL, "_blank");
}

// Construct the URL
function getURL(brand, vinNumber) {
  let url = "";
  switch (brand.value) {
    case "honda":
      url = `https://www.bike-parts-honda.com/honda-motorcycle/search_vehicle/chassis/${vinNumber.value}+`;
      break;
    case "yamaha":
      url = `https://www.bike-parts-yam.com/yamaha-motorcycle/search_vehicle/chassis/${vinNumber.value}+`;
      break;
    case "bmw":
      url = `https://www.bike-parts-bmw.co.uk/bmw-motorcycle/search_vehicle/chassis/${vinNumber.value}`;
      break;
      case "kawasaki":
        url = `https://www.bike-parts-kawa.com/kawasaki-motorcycle/search_vehicle/chassis/${vinNumber.value}`;
        break;
        case "ktm":
        url = `https://www.bike-parts-ktm.com/ktm-motorcycle/search_vehicle/chassis/${vinNumber.value}`;
        break;

    default:
      break;
  }
  console.log(url);
  return url;
}

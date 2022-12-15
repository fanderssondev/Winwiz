const cherio = require("cherio");
const request = require("request");

request(
    "https://www.bike-parts-honda.es/honda-motocicleta/busqueda_vehiculo/chasis/ZDCPC41F0BF102475+",
    (error, response, html) => {
      if (!error && response.statusCode === 200) {
        console.log(html);
      }
    }
  );

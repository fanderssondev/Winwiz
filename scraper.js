const cherio = require("cherio");
const request = require("request");

request(
  "https://www.bike-parts-honda.es/honda-motocicleta/busqueda_vehiculo/chasis/ZDCPC41F0BF102475+",
  (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cherio.load(html);

      //   const card = $(".js_filter_card div div div a");
      //   console.log(card.text());

      $(".js_filter_card div div div a").each((i, el) => {
        const item = $(el).text();
        console.log(item);
        console.log(
          "************************************************************************************************"
        );
      });
    }
  }
);

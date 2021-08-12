import { useEffect } from "react";
import Graph from "../components/Graph";
import Table from "../components/Table";
import { TSLA } from "../utils";
import { CarInfo } from "../components/CarInfo"
import {getBestPrices} from "../utils/helpers"

function Statistics() {
  useEffect(() => {
    fetch("api")
      .then((response) => response.json())
      .then(({data}) => {
        
        //console.log(data)
        var all_cars = {};
        data.forEach(elem => {
          //console.log(elem)
          // var car_object = new CarInfo();
          // car_object.id = elem.ID;
          // car_object.date = elem.DATE;
          // car_object.name = elem.NAME;
          // car_object.model = elem.MODEL;
          // car_object.price = elem.PRICE;
          // car_object.typeOfPrice = elem.TYPE_OF_PRICE;
          // car_object.milage = elem.MILAGE;
          var car_info = new CarInfo();
          car_info.get_info(elem);
          //console.log(car_info);
          all_cars[elem.ID] = car_info;

        });
        // for (const [key, value] of Object.entries(all_cars)) {
        //   console.log(`${key}: ${value.date}, ${value.name}`);
        // }
        const model = "Model 3";
        const best_prices = getBestPrices(all_cars, model);
        best_prices.forEach(elem => {
          console.log(elem)
        }) 
        
      });

  }, []);

  return (
    <main>
      <h1>TSLA Prices</h1>
      <div className="statistics-content">
        <Graph prices={TSLA} />
        <Table people={TSLA} />
      </div>
    </main>
  );
}

export default Statistics;

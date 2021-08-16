import { useEffect, useState } from "react";
import { getCarPrices } from "../api";
import Graph from "../components/Graph";
import Table from "../components/Table";

function Statistics() {
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    getCarPrices("Model S")
      .then((data) => {
        // console.log(data)
        setCarData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <h1>Car Prices</h1>
      <div className="statistics-content">
        {carData && <Graph data={carData} />}
        {carData && <Table data={carData} />}
      </div>
    </main>
  );
}

export default Statistics;

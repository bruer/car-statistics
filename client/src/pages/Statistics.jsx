import { useEffect } from "react";
import Graph from "../components/Graph";
import Table from "../components/Table";
import { TSLA } from "../utils";

function Statistics() {
  useEffect(() => {
    fetch("api")
      .then((response) => response.json())
      .then(console.log);
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

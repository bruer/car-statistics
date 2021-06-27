import Graph from "../components/Graph";
import Table from "../components/Table";
import { TSLA } from "../utils";

function Statistics() {
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

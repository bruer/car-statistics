import Graph from "../components/Graph";
import Table from "../components/Table";
import { people, TSLA } from "../utils";

function Statistics() {
  return (
    <main>
      <h1>TSLA Prices</h1>
      <div className="statistics-content">
        <Graph prices={TSLA} />
        <Table data={people} />
        <Table data={TSLA} />
      </div>
    </main>
  );
}

export default Statistics;

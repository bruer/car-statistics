import Graph from "../components/Graph";
import Table from "../components/Table";

const people = [
  { name: "Bob", age: 53 },
  { name: "Brad", age: 51 },
  { name: "Betty", age: 67 },
];

function Statistics() {
  return (
    <main>
      <h1>Statistics</h1>
      <div className="statistics-content">
        <Table people={people} />
        <Graph people={people} />
      </div>
    </main>
  );
}

export default Statistics;

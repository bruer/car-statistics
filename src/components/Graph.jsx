import { Line } from "react-chartjs-2";

function Graph({ people }) {
  return (
    <div className="graph-container">
      <Line
        data={{
          labels: people.map(({ name }) => name),
          datasets: [
            {
              data: people.map(({ age }) => age),
              label: "ages",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgba(255, 99, 132, 0.2)",
            },
          ],
        }}
      />
    </div>
  );
}

export default Graph;

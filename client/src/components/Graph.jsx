import { Line } from "react-chartjs-2";

function Graph({ data }) {
  return (
    <div className="graph-container">
      <Line
        data={{
          labels: data.map(({ date }) => date),
          datasets: [
            {
              data: data.map(({ price }) => price),
              label: data[0].model,
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

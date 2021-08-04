import { Line } from "react-chartjs-2";

function Graph({ prices }) {
  return (
    <div className="graph-container">
      <Line
        data={{
          labels: prices.map(({ date }) => date),
          datasets: [
            {
              data: prices.map(({ open }) => open),
              label: "Open",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgba(255, 99, 132, 0.2)",
            },
            {
              data: prices.map(({ high }) => high),
              label: "High",
              backgroundColor: "rgb(0, 188, 212)",
              borderColor: "rgba(0, 188, 212, 0.2)",
            },
            {
              data: prices.map(({ low }) => low),
              label: "Low",
              backgroundColor: "rgb(0, 150, 136)",
              borderColor: "rgba(0, 150, 136, 0.2)",
            },
            {
              data: prices.map(({ close }) => close),
              label: "Close",
              backgroundColor: "rgb(159, 39, 176)",
              borderColor: "rgba(159, 39, 176, 0.2)",
            },
            {
              data: prices.map(({ adjClose }) => adjClose),
              label: "Adj Close",
              backgroundColor: "rgb(255, 193, 7)",
              borderColor: "rgba(255, 193, 7, 0.2)",
            },
            {
              data: prices.map(({ volume }) => volume),
              label: "Volume",
              backgroundColor: "rgb(63, 81, 181)",
              borderColor: "rgba(63, 81, 181, 0.2)",
            },
          ],
        }}
      />
    </div>
  );
}

export default Graph;

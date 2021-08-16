import React from "react";

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          {Object.entries(data[0]).map(([name], index) => (
            <th key={index}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataset, index) => (
          <tr key={index}>
            {Object.entries(dataset).map(([, value], index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

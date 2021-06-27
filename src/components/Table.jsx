import React from "react";

function Table({ people }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
          <th>Adj Close</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {people.map(
          ({ date, open, high, low, close, adjClose, volume }, index) => {
            return (
              <tr key={index}>
                <td>{date}</td>
                <td>{open}</td>
                <td>{high}</td>
                <td>{low}</td>
                <td>{close}</td>
                <td>{adjClose}</td>
                <td>{volume}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}

export default Table;

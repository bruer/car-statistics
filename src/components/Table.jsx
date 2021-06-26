import React from 'react'

function Table({people}) {
    return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {people.map(({ name, age }, index) => {
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    )
}

export default Table

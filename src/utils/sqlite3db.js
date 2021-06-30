const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('/Users/jbruer/Development/sqlite/db/car-statistics.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the car-statistics database.');
  });

  db.serialize(() => {
    db.each(`SELECT ID,
                    Name as name
             FROM used_car_prices2`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + "\t" + row.name);
    });
  });

  let sql = `SELECT 
                  DISTINCT DATE date,
                  MODEL model,
                  PRICE price
            FROM used_car_prices
            WHERE DATE > ?
            AND MODEL = 'Model 3' 
            GROUP BY DATE
            `;

db.each(sql, ["2021-01-01"], (err, row) => {
    //console.log(`${row.id} ---${row.date} -- ${row.model} -- ${row.price}`);
  if (err) {
    throw err;
  }
  let model3_data = {};
  model3_data[row.date] = row.price;
  //console.log(`${row.id} ---${row.date} -- ${row.model} -- ${row.price}`);
  for (const [key, value] of Object.entries(model3_data)) {
    console.log(key, value);
  }
});
  
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });
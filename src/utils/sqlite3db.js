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

  let sql = `SELECT ID id,
                  MODEL model,
                  PRICE price
            FROM used_car_prices
            WHERE DATE > ? 
            ORDER BY ID`;

db.each(sql, ['2021-06-28'], (err, row) => {
  if (err) {
    throw err;
  }
  
  console.log(`${row.id} ${row.model} - ${row.price}`);
});
  
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });
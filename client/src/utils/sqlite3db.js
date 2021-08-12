const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../db/car-statistics.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the car-statistics database.");
});

db.serialize(() => {
  db.each(
    `SELECT ID as id,
                    Name as name
             FROM used_car_prices`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      // console.log(row.id + "\t" + row.name);
      console.log(row);
    }
  );
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the database connection.");
});

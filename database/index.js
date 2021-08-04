const sqlite3 = require("sqlite3").verbose();

// const DB_SOURCE = "database/car-statistics.db";
const DB_SOURCE = "database/test_js.db";

const db = new sqlite3.Database(DB_SOURCE, sqlite3.OPEN_READWRITE, (err) => {
  if (err) throw err;
  console.log(`connected to ${DB_SOURCE}`);
});

module.exports = db;

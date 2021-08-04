const express = require("express");
const app = express();
const db = require("../database");

app.listen(3001, () => console.log("start server at 3001"));

app.get("/", (req, res) => {
  res.json({ message: "hej" });
});

app.get("/api", (req, res) => {
  // const sql = `SELECT ID as id, Name as name FROM used_car_prices`;
  // const sql = `SELECT id, name, age FROM people`;
  const sql = `SELECT * FROM people`;

  db.all(sql, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

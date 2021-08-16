const express = require("express");
const app = express();
const db = require("../database");

app.listen(3001, () => console.log("start server at 3001"));

app.get("/", (req, res) => {
  res.json({ message: "hej" });
});

app.get("/prices/:model", (req, res) => {
  const { model } = req.params;
  const sql = `
    select 
      DATE as date, 
      PRICE as price, 
      MANUFACTURER as manufacturer, 
      MODEL as model, 
      NAME as name, 
      ENGINE_TYPE as engine_type
    from used_car_prices 
    where TYPE_OF_PRICE != "Auktionsbil" and MODEL = "${model}"
    group by DATE`;

  db.all(sql, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

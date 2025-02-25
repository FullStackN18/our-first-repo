const epxress = require("express");
const app = epxress();

app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.listen(3000, () => console.log("Work"));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const articleRoutes = require("./routes/articleRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/articles", articleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.authenticate();
  console.log("Database connected.");
});

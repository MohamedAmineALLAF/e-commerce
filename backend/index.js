const express = require("express");

const PORT = 8000;

const app = express();

const router = require('./routes/routes');
const categoryRoute = require('./routes/categoryRoutes')

const mongoose = require("mongoose");
const cors = require("cors");


app.use(cors());

app.use(express.json());
/*app.use(express.urlencoded({ extended: false }));*/


const dotenv = require("dotenv");

dotenv.config();


mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

app.use(router);
app.use(categoryRoute)
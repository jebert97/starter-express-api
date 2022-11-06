const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./Recipe");
require("./RandomWord");
require("./RandomQuote");
require("dotenv").config();
const Recipe = mongoose.model("recipe");
const RandomWord = mongoose.model("randomword");
const RandomQuote = mongoose.model("randomquote");

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const mongURI =
  "mongodb+srv://jebert:test@cluster0.pj9sk0e.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connect Success");
});

mongoose.connection.on("error", (err) => {
  console.log("error", err);
});

app.post("/delete", (req, res) => {
  Recipe.findByIdAndRemove(req.body.id)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

app.post("/update", (req, res) => {
  Recipe.findByIdAndUpdate(req.body.id, {
    name: req.body.name,
    ingredients: req.body.ingredients,
    instruction: req.body.instruction,
    image: req.body.image,
  })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

app.post("/send-data", (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients,
    image: req.body.image,
  });
  recipe
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  Recipe.find({})
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/RandomWord", (req, res) => {
  RandomWord.find({})
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/RandomQuote", (req, res) => {
  RandomQuote.find({})
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log("Listening on 5000");
});

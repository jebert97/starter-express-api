const mongoose = require("mongoose");
const RandomWord = new mongoose.Schema({
  deutschesWort: String,
  badischesWort: String,
});

mongoose.model("randomword", RandomWord);

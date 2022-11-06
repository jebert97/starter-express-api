const mongoose = require("mongoose");
const RandomQuote = new mongoose.Schema({
  badischesZitat: String,
});

mongoose.model("randomquote", RandomQuote);

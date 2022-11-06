const mongoose = require("mongoose");

const IngredientsSchema = new mongoose.Schema({
  text: String,
  amount: Number | null,
  unit: String | null,
  new_amount: Number | null,
});

const RecipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [IngredientsSchema],
  image: String,
  instructions: String,
  cookingtime: Number,
  numberofPersons: Number,
});

mongoose.model("recipe", RecipeSchema);

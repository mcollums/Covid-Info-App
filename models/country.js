const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  country: {
    type: String,
    unique: true
  },
  history: [
    {
      type: Schema.Types.ObjectId,
      ref: "History"
    }
  ]
});

const Country = mongoose.model("Country", CountrySchema);

module.exports = Country;
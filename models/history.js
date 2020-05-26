const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  Confirmed: String,
  Deaths: String,
  Recovered: String,
  Active: String,
  Date: String
});

const History = mongoose.model("History", HistorySchema);

module.exports = History;

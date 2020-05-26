const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  confirmed: String,
  deaths: String,
  recovered: String,
  active: String,
  date: String
});

const History = mongoose.model("History", HistorySchema);

module.exports = History;

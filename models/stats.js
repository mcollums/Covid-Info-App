const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statSchema = new Schema({
  country: { type: String, required: true },
  recovered: { type: Number, required: true },
  deaths: { type: String, required: true },
  confirmed: { type: Number, required: true },
  lastReported:{ type: String, required: true },
  lastChecked: { type: String, required: true }
});

const Stats = mongoose.model("Stats", statSchema);

module.exports = Stats;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatSchema = new Schema({
  country: { type: String, required: true },
  recovered: { type: Number, required: true },
  deaths: { type: Number, required: true },
  confirmed: { type: Number, required: true },
  lastReported:{ type: String, required: true },
  lastChecked: { type: String, required: true }
});

const Stats = mongoose.model("Stats", StatSchema);

module.exports = Stats;

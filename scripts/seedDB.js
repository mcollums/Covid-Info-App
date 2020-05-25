const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactCovidDB"
);

const dataSeed = [
  {
    "country": "Canada",
    "recovered": 43998,
    "deaths": 6534,
    "confirmed": 86106,
    "lastReported": "2020-05-25T02:32:44+00:00",
    "lastChecked": "2020-05-25T19:17:08+00:00",
  },
  {
    "country": "Mexico",
    "recovered": 30000,
    "deaths": 3445,
    "confirmed": 456464,
    "lastReported": "2020-04-25T02:32:44+00:00",
    "lastChecked": "2020-04-25T19:17:08+00:00",
  },
  {
    "country": "France",
    "recovered": 43998,
    "deaths": 6534,
    "confirmed": 86106,
    "lastReported": "2019-12-05T02:32:44+00:00",
    "lastChecked": "2019-12-05T19:17:08+00:00",
  }
];

db.Stats
  .remove({})
  .then(() => db.Stats.collection.insertMany(dataSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

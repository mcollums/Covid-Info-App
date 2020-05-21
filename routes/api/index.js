const router = require("express").Router();
const bookRoutes = require("./books");
const covidRoutes = require("./stats");


// Book routes
router.use("/books", bookRoutes);
router.use("/stats", covidRoutes);


module.exports = router;

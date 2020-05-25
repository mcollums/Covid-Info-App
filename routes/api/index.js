const router = require("express").Router();
const statRoutes = require("./stats");
const newsRoutes = require("./news");
const historyRoutes = require("./history");

// Book routes
router.use("/stats", statRoutes);
router.use("/news", newsRoutes);
router.use("/history", historyRoutes);


module.exports = router;

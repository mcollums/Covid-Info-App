const router = require("express").Router();
const bookRoutes = require("./books");
const statRoutes = require("./stats");
const newsRoutes = require("./news");



// Book routes
router.use("/books", bookRoutes);
router.use("/stats", statRoutes);
router.use("/news", newsRoutes);



module.exports = router;

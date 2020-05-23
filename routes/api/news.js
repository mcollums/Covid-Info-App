const router = require("express").Router();
const newsController = require("../../controllers/newsController");

// Matches with "/api/news"
router.route("/")
  .get(newsController.getHeadlines)

// Matches with "/api/news/:country"
// router.route("/:country")
//   .get(newsController.getByCountry)


module.exports = router;

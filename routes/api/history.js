const router = require("express").Router();
const historyController = require("../../controllers/historyController");

// Matches with "/api/stats"
// router.route("/")
//   .get(historyController.getGlobalHistory)

// Matches with "/api/history/:country"
router.route("/:country")
  .get(historyController.getCountryHistory)
//   .put(headlineController.update)
//   .delete(headlineController.remove);

module.exports = router;

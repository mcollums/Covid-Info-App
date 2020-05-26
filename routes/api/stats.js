const router = require("express").Router();
const statsController = require("../../controllers/statsController");

// Matches with "/api/stats"
// router.route("/")
//   .get(statsController.getGlobalStats)

// Matches with "/api/stats/:country"
router.route("/:country")
  .get(statsController.getTodaysStatsByLocation)
//   .put(headlineController.update)
//   .delete(headlineController.remove);

module.exports = router;

const router = require("express").Router();
const statsController = require("../../controllers/statsController");

// Matches with "/api/stats"
router.route("/")
  .get(statsController.getGlobalStats)

// Matches with "/api/stats/:id"
// router.route("/:id")
//   .get(statsController.getByCountry)
//   .put(headlineController.update)
//   .delete(headlineController.remove);

module.exports = router;
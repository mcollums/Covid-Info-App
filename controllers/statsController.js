const db = require("../models");
const { getDataByLocationAPI, splitDBDate, getTodaysDate } = require('../scripts/statHelper')

module.exports = {
    getStatsByLocation: async function (req, res) {
        const reqLocation = req.params.location;
        let clientObj = {};

        try {
            //Find country in DB based on location
            const islocationInDB = await db.Stats.findOne({country : reqLocation});

            //Get last Updated Date, and split into new Object.
            const updatedDate = await splitDBDate(islocationInDB.lastChecked);
            console.log("Last Checked Date " + JSON.stringify(updatedDate));

            //Get Today's date and split into a new Object
            let todayObj = await getTodaysDate();
            console.log(`todayObj: ${JSON.stringify(todayObj)}`);

            //IF the country is not in the DB, THEN call the API, add it to DB, and set the clientObj to be the dbObj
            if (islocationInDB === null || updatedDate) {
                const { location, recovered, deaths, confirmed, lastChecked, lastReported } = await getDataByLocationAPI(reqLocation);
                const dbObj = await db.Stats.create({
                    "country" : location,
                    "recovered" : recovered,
                    "deaths" : deaths,
                    "confirmed" : confirmed,
                    "lastReported" : lastReported,
                    "lastChecked" : lastChecked
                });
                clientObj = dbObj;

            } else {
                console.log("Location is in database");
            }

            return res.json(clientObj);

        } catch (error) { //For Errors
            console.error(error);
        }
    }
};
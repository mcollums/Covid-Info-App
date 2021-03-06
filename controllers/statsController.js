const db = require("../models");
const _ = require('underscore');
const { getDataByLocationAPI } = require('./helpers/statsHelper');
const { splitDBDate, getTodaysDate, capitalize } = require('./helpers/helper');


module.exports = {
    getTodaysStatsByLocation: async function (req, res) {
        const reqCountry = await capitalize(req.params.country);
        let clientObj = {};

        try {
            //Find country in DB based on location
            const islocationInDB = await db.Stats.findOne({ country: reqCountry });

            //IF the country is not in the DB THEN call the API, add it to DB, and set the clientObj to be the dbObj
            if (islocationInDB === null) {
                const { location, recovered, deaths, confirmed, lastChecked, lastReported } = await getDataByLocationAPI(reqCountry);
                const dbObj = await db.Stats.create({
                    "country": location,
                    "recovered": recovered,
                    "deaths": deaths,
                    "confirmed": confirmed,
                    "lastReported": lastReported,
                    "lastChecked": lastChecked
                });

                clientObj = dbObj;

            } else { //if the country is in the DB
                ///Get formatted Date Objects
                const lastDateObj = await splitDBDate(islocationInDB.lastChecked);
                const todayObj = await getTodaysDate();

                // IF not today's info, retrieve it from the API
                if (_.isEqual(lastDateObj, todayObj) === false) {
                    const { recovered, deaths, confirmed, lastChecked, lastReported } = await getDataByLocationAPI(reqLocation);
                    const updatedDBObj = await db.Stats.findOneAndUpdate({ country: reqCountry }, {
                        "recovered": recovered,
                        "deaths": deaths,
                        "confirmed": confirmed,
                        "lastReported": lastReported,
                        "lastChecked": lastChecked
                    }, { new: true });
                    
                    clientObj = updatedDBObj
                } else { //ELSE send the DB Object from today
                    clientObj = islocationInDB
                }
            } 

            return res.json(clientObj);

        } catch (error) { //For Errors
            console.error(error);
        }
    }
};
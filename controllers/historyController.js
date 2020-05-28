const db = require("../models");
const { getByCountry } = require('./helpers/historyHelper');
const { splitDBDate, getTodaysDate } = require('./helpers/helper');


module.exports = {
    // getGlobalHistory: async function (req,res) {
    //     const globalData = await getGlobal();
    //     return res.json(globalData);
    // },
    getCountryHistory: async function (req,res) {
        const country = req.params.country;
        console.log("controller" + country)
        let clientObj = {};

        try {
            const islocationInDB = await (await db.Country.findOne({ "country" : country }));
            //IF country is not in DB
            if (islocationInDB === null) {
                //Add the country to Country Collection
                await db.Country.create({ "country" : country });
                //Get API Data for the country
                const apiRes = await getByCountry(country);
                //Add the API Data to the History Collection
                const hisObj = await db.History.create(apiRes);
                //Add the new _ids to the Country's history field
                await db.Country.findOneAndUpdate({ "country" : country }, {$push: { history : hisObj }}, { new: true });
                //Populate the Country with the History Data and send back to client
                const resultObj = await db.Country.findOne({ "country" : country }).populate("history");
                console.log("controller IF after DB populate " + JSON.stringify(resultObj));
                clientObj = resultObj
            } else {
                console.log("Country Created Already");
                // const todayObj = await getTodaysDate();
                const dbObj = await db.Country.findOne({ "country" : country }).populate("history");
                console.log("controller after DB populate " + JSON.stringify(dbObj));
                clientObj = dbObj
            }
        } catch (error) {
            console.error(error);
        }

        return res.json(clientObj);
    }
}
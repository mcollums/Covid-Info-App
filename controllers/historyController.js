const db = require("../models");
const { getByCountry } = require('./helpers/historyHelper');



module.exports = {
    // getGlobalHistory: async function (req,res) {
    //     const globalData = await getGlobal();
    //     return res.json(globalData);
    // },
    getCountryHistory: async function (req,res) {
        const country = req.params.country;
        const countryData = await getByCountry(country);
        let clientObj = {};

        try {
            const islocationInDB = await (await db.Country.findOne({ "country" : country }));
            
            if (islocationInDB === null) {
                await db.Country.create({ "country" : country });
                const apiRes = await getByCountry(country);
                const hisObj = await db.History.create(apiRes);
                const result = await db.Country.findOneAndUpdate({ "country" : country }, {$push: { history : hisObj }}, { new: true });
                console.log(result);
            } else {
                console.log("Country Created Already")
            }
        } catch (error) {
            console.error(error);
        }

        return res.json(countryData);
    }
}
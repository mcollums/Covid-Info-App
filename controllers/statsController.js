const db = require("../models");
const { getDataByLocationAPI } = require('../scripts/statHelper')

module.exports = {
    getStatsByLocation: async function (req, res) {
        //NOTE: This API only searches for the country if it is capitalized.
        //For example, canada should be Canada. 
        const reqLocation = req.params.location;
        try {
            //Call DB here and then put axios in helper file
            const islocationInDB = await db.Book.findOne({country : reqLocation});
            console.log(`Inside getStatsByLocation in controller 
            ===============================================
            ${islocationInDB}
            `)
            const apiResponse = await getDataByLocationAPI(reqLocation);
            
            return res.json(apiResponse);
        } catch (error) {
            console.error(error);
        }
    }
};
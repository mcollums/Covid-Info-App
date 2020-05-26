const axios = require('axios');
const { capitalize } = require('./helper');


module.exports = {
    getDataByLocationAPI: async function (location) {
        //NOTE: This API only searches for the country if it is capitalized.
        //For example, canada should be Canada. 
       
        const locCap = await capitalize(location);
        
        try {
            const apiResponse = await axios({
                "method": "GET",
                "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_CORONA_STATS_APIKEY,
                    "useQueryString": true
                },
                "params": {
                    "country": locCap
                }
            });
            return apiResponse.data.data;

        } catch (error) {
            console.error(error);
        }
    }
}

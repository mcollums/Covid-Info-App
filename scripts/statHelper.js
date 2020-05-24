const axios = require('axios');


module.exports = {
    getDataByLocationAPI: async function (location) {
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
                    "country": location
                }
            });
            console.log("getDataByLocation=========================");

            console.log(apiResponse.data.data);
            return apiResponse.data.data;
        } catch (error) {
            console.error(error);
        }
    }
}
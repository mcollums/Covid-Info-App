const db = require("../models");
const axios = require('axios');

module.exports = {
    getStatsByLocation: async function (req, res) {
        try {
            const response = await axios({
                "method": "GET",
                "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_CORONA_STATS_APIKEY,
                    "useQueryString": true
                },
                "params" : {
                    "country" : req.params.location
                }
            });
            console.log(response.data.data);
            return res.json(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }
};
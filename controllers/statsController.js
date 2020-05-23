const db = require("../models");
const axios = require('axios');

module.exports = {
    getGlobalStats: async function (req, res) {
        try {
            const response = await axios({
                "method": "GET",
                "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                    "x-rapidapi-key": "ac414ed6d2msh2ce4cc693a1599bp126f6fjsn949d9a724cad",
                    "useQueryString": true
                }
            });
            res.json(response.data)
        } catch (error) {
            console.error(error);
        }
    }
};
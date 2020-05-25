const axios = require('axios');


module.exports = {
    getDataByLocationAPI: async function (location) {
        //NOTE: This API only searches for the country if it is capitalized.
        //For example, canada should be Canada. 
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
            return apiResponse.data.data;

        } catch (error) {
            console.error(error);
        }
    },
    splitDBDate: async function (str) {
        //Takes date string from API, splits it up and returns a new object
        const [year, month, extra] = str.split("-");
        const [day] = extra.split("T");

        const dateObj = {
            "day": parseInt(day),
            "month": parseInt(month),
            "year": parseInt(year)
        }

        return dateObj;
    },
    getTodaysDate: async function () {
        //Gets today's dd/mm/yyyy and returns it as an object
        const today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        const dateObj = {
            "day": parseInt(dd),
            "month": parseInt(mm),
            "year": parseInt(yyyy)
        }

        return dateObj;
    }
}
const axios = require('axios');

module.exports = {
    //NOTE unable to finish route until the API has finished this route.
    // getGlobal: async function () {
    //     try {
    //         const apiResponse = await axios({
    //             "method": "GET",
    //             "url": "https://api.covid19api.com/world?from=2020-03-01T00:00:00Z&to=2020-05-01T00:00:00Z"
    //         });
    //         // console.log(apiResponse);
    //         return apiResponse.data;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },
    getByCountry: async function (location) {
        const locFormat = location.split(" ").join("-");
        try {
            const apiResponse = await axios({
                "method": "GET",
                "url": `https://api.covid19api.com/live/country/${locFormat}/status/confirmed/date/2020-01-01T13:13:30Z`
            });
            // console.log(apiResponse);
            return apiResponse.data;
        } catch (error) {
            console.error(error);
        }
    }
}
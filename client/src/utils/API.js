import axios from "axios";

export default {
  getCovidData: function(location) {
    return axios.get("api/stats/" + location)
  },
  getHistoryByCountry: function(country) {
    return axios.get("api/history/" + country)
  }
}

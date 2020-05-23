const db = require("../models");
const axios = require('axios');
const NewsAPI = require('newsapi');
const apiKey = process.env.REACT_APP_NEWS_APIKEY;
console.log("=========================================")
console.log(apiKey);
const newsapi = new NewsAPI(apiKey);
module.exports = {
    // getHeadlines: async function (req, res) {
    //     var reqUrl = `http://newsapi.org/v2/everything?
    //       q=%2BCoronavirus&
    //       sortBy=popularity&
    //       from=2020-05-01&
    //       language=en&
    //       apiKey=a5853acda7504b5b9a97c18ca8716c62`
    //     try {
    //         const response = await axios({
    //             "method": "GET",
    //             "url": reqUrl
    //         });
    //         res.json(response.data)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    getHeadlines: async function (req, res) {
        newsapi.v2.everything({
            q: 'coronavirus',
            sources: 'bbc-news,the-verge',
            language: 'en',
            sortBy: 'relevance'
          }).then(response => {
            res.json(response.articles)
          });
    }
};
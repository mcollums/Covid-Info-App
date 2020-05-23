const db = require("../models");
const axios = require('axios');

//Connecting to the NEWS API module
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_APIKEY);

module.exports = {
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
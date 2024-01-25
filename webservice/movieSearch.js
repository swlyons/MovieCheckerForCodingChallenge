const express = require("express");
const router = express.Router();
const fs = require('node:fs');
const fetch = require('node-fetch');


const retrieveApiKeyAndAccessTokenPair = (callback) => {
    fs.readFile('tokenInformation.properties', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      var apiKey;
      var apiReadAccessToken;
      var temp;
      var words = data.split('\n');

      for(var i =0; i< words.length; i++){
        temp=words[i].split('=');
        if(temp[0] === 'APIKey'){
            apiKey=temp[1];
            continue;
        }
        if(temp[0] === 'APIReadAccessToken'){
            apiReadAccessToken=temp[1];
            continue;
        }
      }
      if(apiKey === undefined){
        apiKey = '';
      }
      if(apiReadAccessToken === undefined){
        apiReadAccessToken = '';
      }
      const apiKeyAndAccessTokenPair = [apiKey, apiReadAccessToken];

      callback(apiKeyAndAccessTokenPair);
    });
}

// Home page route
router.get("/", function (req, res) {
    (() => {
      retrieveApiKeyAndAccessTokenPair((apiKeyAndAccessTokenPair)=>{
          //TODO: Search parameter needs to be passed in, may need to url encode depending on how I do it
          //TODO: Pass correct information back to front end
          //verified include_adult is false
          var searchParameter = "Fight%20Club";
            const url = 'https://api.themoviedb.org/3/search/movie?query='+searchParameter+'&include_adult=false&language=en-US&page=1';
            const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + apiKeyAndAccessTokenPair[1]
              }
            };

            fetch(url, options)
              .then(res => res.json())
              .then(json => console.log(json))
            .catch(err => console.error('error:' + err));

          res.send("check logs");
    });
    })();
});

// About page route
router.get("/test", function (req, res) {
  res.send("This should be something like http://localhost:3000/movieSearch/test"); // works when initially tested commit break
});

module.exports = router;

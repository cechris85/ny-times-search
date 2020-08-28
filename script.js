var apiKey = 'AZTpaUQO3pQckvcMf28LQ2IFMRx4UzJa';
var search = 'election';
var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + search + '&api-key=' + apiKey;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
   console.log(response);
});
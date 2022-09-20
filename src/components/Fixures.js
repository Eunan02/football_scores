const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
  params: {league: '39', season: '2020', team: '33'},
  headers: {
    'X-RapidAPI-Key': '5a4077a935mshd1ad2eadb14b9adp13adb3jsn959534f06f1d',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
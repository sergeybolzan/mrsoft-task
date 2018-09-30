let express = require('express');
let fetch = require('node-fetch');

let app = express();

app.get('*', async function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  let data = await getData(req.url.substr(1));
  res.json(data);
});

app.listen(5001, () => console.log('Listening'));

async function getData(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
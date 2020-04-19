require('es6-promise').polyfill();
require('isomorphic-fetch');

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/yelp', function(req, res) {
  const { term, location } = req.body;
  if (!term || !location) {
    res.status(404).send('Must have a "term" or "location" in body');
  } else {
    const termQuery = term ? `term=${encodeURIComponent(term)}` : '';
    const locationQuery = location ? `location=${encodeURIComponent(location)}` : '';
    fetch('https://api.yelp.com/v3/businesses/search?' + [termQuery, locationQuery].join('&'), {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + process.env.YELP_API_KEY,
        'Content-Type': 'application/json',
      },
    })
      .then(yelpRes => yelpRes.json())
      .then(yelpRes => res.status(200).send(yelpRes))
      .catch(err => res.status(500).send({ err }));
  }
})

app.listen(4000);

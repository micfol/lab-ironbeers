const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:



// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res) => {
  let beers = []
  punkAPI
    .getBeers()
    .then(beersFromApi => {
    beers = beersFromApi
    res.render('beers',{ beers })
  })
    .catch(error => console.log(Error))
});

app.get('/random-beer', (req, res) => {
  punkAPI
    .getRandom()
    .then(responseFromAPI => { 
      let randomBeer = responseFromAPI[0];
      console.log(teste);
      res.render('random-beer', randomBeer)
  })
  .catch(error => console.log(error));
});



app.listen(3000, () => console.log('🏃‍ on port 3000'));

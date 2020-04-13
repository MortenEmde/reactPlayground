const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

apiKey='b004dd99';

router.get('/:movieID', async function(req, res, next) {
  try {
    const unparsedMovieSearch = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${req.params.movieID}`, { 
      method: 'GET', 
    })
    const movieSearch = await unparsedMovieSearch.json();
    res.send(movieSearch);
  } catch (err) {
    res.sendStatus(400)
  }
});

module.exports = router;
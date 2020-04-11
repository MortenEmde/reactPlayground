const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.get('/', async function(req, res, next) {
  try {
    req.headers['accept'] = 'text/plain'
    const unparsedJoke = await fetch( 'https://icanhazdadjoke.com/', { 
      method: 'GET', 
      headers: {
      'Accept': 'text/plain',
      'User-Agent': 'My Libray (https://github.com/MortenEmde/hackday)'
      }
    })
    const joke = await unparsedJoke.text();
    res.send(joke);
  } catch (err) {
    res.sendStatus(400)
  }
});

module.exports = router;
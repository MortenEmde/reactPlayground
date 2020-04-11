const express = require('express')
const app = express()
const port = 8000
const indexRouter = require('./routes/index');
const moviesRouter = require('./routes/movies');
const catRouter = require('./routes/cat');

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/cat', catRouter)

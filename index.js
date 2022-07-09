const express = require('express');
const app = express();
const logger = require('morgan');
app.use(logger('dev'));
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// const mongoose = require('mongoose');
app.use(express.static('public'));

app.get('/', (req, res) => {

  res.render('index.ejs')
})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`wbe host on port ${port}`))
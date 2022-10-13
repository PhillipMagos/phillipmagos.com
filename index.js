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
  res.redirect('/home')
})
app.get('/home', (req, res) => {
  res.render('index.ejs')
})

app.get('/about', (req, res) => {
  res.render('about.ejs')
})

app.get('/projects', (req, res) => {
  res.render('projects.ejs')
})

app.get('/contact', (req, res) => {
  res.render('contact.ejs')
})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`web host on port ${port}`))
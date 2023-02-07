//

// const http = require('http')
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World! NodeJS \n');
// });



// added from https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#install-the-application

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
  res.render('home.ejs')
})

app.get('/about', (req, res) => {
  res.render('about.ejs')
})

app.get('/contact', (req, res) => {
  res.render('contact.ejs')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio.ejs')
})

app.get('/blog', (req, res) => {
  res.render('blog.ejs')
})

app.get('/projects', (req, res) => {
  res.render('projects.ejs')
})
app.get('/signin', (req, res) => {
  res.render('signin.ejs')
})

app.get('/checkout', (req, res) => {
  res.render('checkout.ejs')
})

//const port = process.env.PORT || 3000
//app.listen(port, ()=> console.log(`web host on port ${port}`))

// end of added from https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#install-the-application
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`512unes App listening on port ${port}`));
// end of app.js
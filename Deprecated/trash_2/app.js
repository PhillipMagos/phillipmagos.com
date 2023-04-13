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

// Beginning of Southpark Characters
//Bring in our data - How we bring it out object? - Destructure
const { characters } = require('./fakeData')
//console.log(characters)

// Use our public folder
app.use(express.static('public'))
// Set view engine
app.set("view engine", "ejs")

// With more than one / in route
app.use('/character', express.static(__dirname + '/public'))



// Routes
app.get('/', (req, res) => {
    // modify when building req.query to send data
    // will use this to build our form
    res.render("home", {data: characters})
})

// Display all characters
app.get('/SPCharacters', (req, res) => {
    res.render("SPCharacters", {data: characters})
})

// Display a character 
app.get('/SPCharacter/:id', (req, res) => {
    // Could say req.params.id - again destructure
    const { id } = req.params
    //console.log(characters[id])
    res.render("SPCharacter", { data: characters[id]})
})


// Display a character using req.query through form
app.get("/id", (req, res) => {
    const { id } = req.query
    res.render("SPCharacter", {data: characters[id]})
})
// End of Southpark Characters

//const port = process.env.PORT || 3000
//app.listen(port, ()=> console.log(`web host on port ${port}`))

// end of added from https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#install-the-application
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`512unes App listening on port ${port}`));
// end of app.js
const BruteforceCalculator = require('./BruteforceCalculator');
const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

console.log(BruteforceCalculator.calculateCrackTime("a"));
console.log(BruteforceCalculator.calculateCrackTime("aB"));
console.log(BruteforceCalculator.calculateCrackTime("aB1"));
console.log(BruteforceCalculator.calculateCrackTime("aB1!"));
console.log(BruteforceCalculator.calculateCrackTime("Cabbag3!"));

// App initialization
let app = express();
let port = config.server.port;
const title = "How secure is my passowrd?";

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Use expressjs bodyParser to parse form data
app.use(bodyParser.urlencoded({extended: false}));

// Automatically serve static files like css, js,...
app.use(express.static('public'));

// Routing and request handling
app.route(['/','index']).get((req, res) => {
    res.render('index', {title: title});
}).post((req, res) => {
    let password = req.body.password || "";
    let score = null

    if (password != '') {
        score = BruteforceCalculator.calculateCrackTime(password);
    }

    res.render('index', {title: title, score: score})
})

app.listen(port, () => {
    console.log(`App is now listening on port ${port}`);
});

const BruteforceCalculator = require('./BruteforceCalculator');
const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const handlebarsHelpers = require('./handlebarsHelpers');

// console.log(BruteforceCalculator.calculateCrackTime("a"));
// console.log(BruteforceCalculator.calculateCrackTime("aB"));
// console.log(BruteforceCalculator.calculateCrackTime("aB1"));
// console.log(BruteforceCalculator.calculateCrackTime("aB1!"));
// console.log(BruteforceCalculator.calculateCrackTime("Cabbag3!"));

// App initialization
let app = express();
let port = config.server.port;
const title = config.app.title;

app.engine('handlebars', handlebars({defaultLayout: 'main', helpers: handlebarsHelpers}));
app.set('view engine', 'handlebars');

// Use expressjs bodyParser to parse form data
app.use(bodyParser.urlencoded({extended: false}));

// Automatically serve static files like css, js,...
app.use(express.static('public'));

// Routing and request handling
app.route(['/','index']).get((req, res) => {
    let password = req.query.p || "";

    let score = null

    if (password != '') {
        score = BruteforceCalculator.calculateCrackTime(password);
    }

    res.render('index', {title: title, score: score, password: password})
});

app.listen(port, () => {
    console.log(`App is now listening on port ${port}`);
});

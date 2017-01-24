// Run the app using `node app test` to start testtool
if (process.argv[2] == 'test') {
    const Testtool = require('./Tests');
    Testtool.runTests();
    return;
}

const BruteforceCalculator = require('./BruteforceCalculator');
const config = require('./config');
const express = require('express');
const handlebars = require('express-handlebars');
const handlebarsHelpers = require('./handlebarsHelpers');

// === App initialization
let app = express();
let port = config.server.port;
const title = config.app.title;

app.engine('handlebars', handlebars({defaultLayout: 'main', helpers: handlebarsHelpers}));
app.set('view engine', 'handlebars');

// Automatically serve static files located in 'public' directory
app.use(express.static('public'));

// === Routing and request handling
app.route(['/','index']).get((req, res) => {
    let password = null;
    let score = null;

    if (typeof req.query.p == 'string' && req.query.p != '') {
        password = req.query.p;
        score = BruteforceCalculator.calculateBruteforceTime(password);
    }

    res.render('index', {title: title, score: score, password: password})
});

app.listen(port, () => {
    console.log(`App is now listening on port ${port}`);
});

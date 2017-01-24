const BruteforceCalculator = require('./BruteforceCalculator');

function test(title, expectedResult, actualResult) {
    console.log(`Testing "${title}":`);

    if (actualResult == expectedResult) {
        console.log("\t[OK]");
    } else {
        console.log("\t [Failed]");
        console.log("\t Expected Result: " + expectedResult);
        console.log("\t Actual Result: " + actualResult);
    }
}

module.exports.runTests = () => {
    test('a', 2.6e-9, BruteforceCalculator.calculateBruteforceTime('a'));
    test('aB', 2.704e-7, BruteforceCalculator.calculateBruteforceTime('aB'));
    test('ab1', 0.0000238328, BruteforceCalculator.calculateBruteforceTime('aB1'));
    test('ab1!', 0.0081450625, BruteforceCalculator.calculateBruteforceTime('aB1!'));
    test('Cabbag3!', 663420.4312890625,  BruteforceCalculator.calculateBruteforceTime('Cabbag3!'));
}

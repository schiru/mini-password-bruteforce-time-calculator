const config = require.main.require('./config');

/**
 * Calculates the number of possibilities per character
 * based on what kind of characters are included in the password.
 *
 * For "abc" the possibilities per character would be 26, whereas for "abc1" the pbc would be 36
 */
function calculatePossibilitiesPerCharacter(password) {
    let possibilities = 0;

    config.calculator.tests.forEach((test) => {
        if (password.match(test.regex) != null) {
            console.log(`matches group: ${test.title}`);
            possibilities += test.addsPossibilities;
        }
    });

    return possibilities;
}

/**
 * Calculates the time required to crack the given password
 */
module.exports.calculateCrackTime = (password) => {
    let possibilities = calculatePossibilitiesPerCharacter(password);
    console.log(`possibilities: ${possibilities}`);

    return Math.pow(possibilities, password.length) / config.calculator.calculationsPerSecond;
}

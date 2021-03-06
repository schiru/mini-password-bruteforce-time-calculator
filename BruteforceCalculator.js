const config = require.main.require('./config');

/**
 * Calculates the number of possibilities per character
 * based on what kind of characters are included in the given password.
 *
 * For "abc", the possibilities per character would be 26, whereas for "abc1" the pbc would be 36
 * @param {string} password
 * @return {int} number of possibilities per character
 */
function calculatePossibilitiesPerCharacter(password) {
    let possibilities = 0;

    config.calculator.tests.forEach((test) => {
        if (password.match(test.regex) != null) {
            // console.log(`matches group: ${test.title}`);
            possibilities += test.addsPossibilities;
        }
    });

    return possibilities;
}

/**
 * Calculates the time required to brute-force the given password in seconds
 * @param {string} password
 * @return {number} required time in seconds
 */
module.exports.calculateBruteforceTime = (password) => {
    let possibilities = calculatePossibilitiesPerCharacter(password);

    return Math.pow(possibilities, password.length) / config.calculator.calculationsPerSecond;
}

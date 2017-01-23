let config = {};

config.calculator = {
    calculationsPerSecond: 10e9,

    // Match patterns for specific types of characters
    // Contains regex and impact on calculation time (adds x possibilities if pattern matches)
    patterns: [
        {
            title: "lowercase letters",
            regex: /[a-z]/,
            adds: 26
        },
        {
            title: "uppercase characters",
            regex: /[A-Z]/,
            adds: 26
        },
        {
            title: "numbers",
            regex: /[0-9]/,
            adds: 10
        },
        {
            title: "special characters",
            regex: /[!@#$%^&*\(\\\)\-\_=+[{ \]};:'"\|`~,<.>\/? ]/,
            adds: 33
        }
    ]
}

module.exports = config;

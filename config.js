let config = {};

config.server = {
    port: 8080,
    hostname: "127.0.0.1"
}

config.app = {
    title: "How secure is my password?"
}

config.calculator = {
    calculationsPerSecond: 10e9,

    // Match patterns for specific types of characters
    // Contains regex and impact on calculation time (adds x possibilities if pattern matches)
    tests: [
        {
            title: "lowercase letters",
            regex: /[a-z]/,
            addsPossibilities: 26
        },
        {
            title: "uppercase characters",
            regex: /[A-Z]/,
            addsPossibilities: 26
        },
        {
            title: "numbers",
            regex: /[0-9]/,
            addsPossibilities: 10
        },
        {
            title: "special characters",
            regex: /[!@#$%^&*\(\\\)\-\_=+[{ \]};:'"\|`~,<.>\/? ]/,
            addsPossibilities: 33
        }
    ]
}

module.exports = config;

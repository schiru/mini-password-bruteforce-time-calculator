let helpers = {}

function pluralify(n, singular, plural) {
    return n == 1 ? singular : plural;
}

helpers.scoreSeconds = (score) => {
    return "(" + score + pluralify(score, ' second', ' seconds') + ")";
}

/**
 * Converts the score to human readable format, e.g. '2 years, 1 month, 23 days'
 * @param  {number} score score in seconds
 * @return {string} score, human readable
 */
helpers.prettyScore = (score) => {
    let seconds = score % 60;
    let minutes = Math.floor(score/60) % 60;
    let hours = Math.floor(score/60/60) % 24;
    let days = Math.floor(score/60/60/24) % 365;
    let years = Math.floor(score/60/60/24 / 365);

    let fields = [];

    if (years > 0) {
        fields.push(years + ' ' + pluralify(years, 'year', 'years'));
    }

    if (days > 0) {
        fields.push(days + ' ' + pluralify(days, 'day', 'days'));
    }

    if (hours > 0) {
        fields.push(hours + ' ' + pluralify(hours, 'hour', 'hours'));
    }

    if (minutes > 0) {
        fields.push(minutes + ' ' + pluralify(minutes, 'minute', 'minutes'));
    }

    if (seconds > 0) {
        // If no larger time unit matched, the password must be less than one minute
        if (fields.length == 0 && seconds < 1) {
            fields.push('less than one second');
        } else {
            seconds = Math.floor(seconds);
            fields.push(seconds + ' ' + pluralify(seconds, 'second', 'seconds'));
        }
    }

    return fields.join(', ');
}

module.exports = helpers;

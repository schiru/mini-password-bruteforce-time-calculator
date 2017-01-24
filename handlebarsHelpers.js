let helpers = {}

function pluralify(str, n) {
    return str == 1 ? str : str + 's';
}

helpers.prettyScore = (score) => {
    let seconds = score % 60;
    let minutes = Math.floor(score/60) % 60;
    let hours = Math.floor(score/60/60) % 24;
    let days = Math.floor(score/60/60/24) % 365;
    let years = Math.floor(score/60/60/24 / 365);

    let fields = [];

    if (years > 0) {
        fields.push(years + ' ' + pluralify('year', years));
    }

    if (days > 0) {
        fields.push(days + ' ' + pluralify('day', days));
    }

    if (hours > 0) {
        fields.push(hours + ' ' + pluralify('hour', hours));
    }

    if (minutes > 0) {
        fields.push(minutes + ' ' + pluralify('minute', minutes));
    }

    if (seconds > 0) {
        // If no larger time unit matched, the password must be less than one minute
        if (fields.length == 0 && seconds < 1) {
            fields.push('less than one second');
        } else {
            seconds = Math.floor(seconds);
            fields.push(seconds + ' ' + pluralify('second', seconds));
        }
    }

    return fields.join(', ');
}

module.exports = helpers;

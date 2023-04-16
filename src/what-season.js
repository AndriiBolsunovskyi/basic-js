const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    // if (((date instanceof Date) === false)) throw new Error("Invalid date!");
    if (date === undefined) return 'Unable to determine the time of year!';
    try {
        date.getTime();
    } catch (error) {
        throw new Error('Invalid date!');
    }


    let mounth = date.getMonth();
    let year = date.getFullYear();
    if (year <= 1970) {
        switch (mounth) {
            case 0:
                console.log("winter");
                return "winter"

                break;
            case 1:
                return "winter"
                break;
            case 2:
                return "spring"
                break;
            case 3:
                return "spring"
                break;
            case 4:
                return "spring"
                break;
            case 5:
                return "summer"
                break;
            case 6:
                return "summer"
                break;
            case 7:
                return "summer"
                break;
            case 8:
                return "autumn|fall"
                break;

            case 9:
                return "autumn|fall"
                break;

            case 10:
                return "autumn|fall"
                break;

            case 11:
                return "winter"
                break;

            default:
                return "fall";
                break;
        }
    }
    console.log(mounth);
    switch (mounth) {
        case 0:
            console.log("winter");
            return "winter"

            break;
        case 1:
            return "winter"
            break;
        case 2:
            return "spring"
            break;
        case 3:
            return "spring"
            break;
        case 4:
            return "spring"
            break;
        case 5:
            return "summer"
            break;
        case 6:
            return "summer"
            break;
        case 7:
            return "summer"
            break;
        case 8:
            return "autumn|fall"
            break;

        case 9:
            return "autumn|fall"
            break;

        case 10:
            return "autumn|fall"
            break;

        case 11:
            return "winter"
            break;

        default:
            return "fall";
            break;
    }

}

module.exports = {
    getSeason
};
const ERROR_TEXT = 'Unable to determine the time of year!';
const INVALID_TEXT = 'Invalid date!';
const OBJECT_DATE = "[object Date]";

const SPRING = "spring";
const SUMMER = "summer";
const AUTUMN = "autumn";
const WINTER = "winter";

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
export default function getSeason(date) {
    if (date === undefined) {
        return ERROR_TEXT;
    } else if (Object.prototype.toString.call(date) === OBJECT_DATE && isNaN(date.getTime())) {
        throw new Error(INVALID_TEXT);
    }

    let month = date.getMonth();
    if (month > 1 && month < 5) {
        return SPRING;
    } else if (month > 4 && month < 8) {
        return SUMMER;
    } else if (month > 7 && month < 11) {
        return AUTUMN;
    } else if (month >= 0 && month < 2 || month === 11) {
        return WINTER;
    } else {
        throw new Error(INVALID_TEXT);
    }
}

// console.log(getSeason(new Date(2020, 02, 31))); // => 'spring'
// console.log(getSeason()); // => 'spring'

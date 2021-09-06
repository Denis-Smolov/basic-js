const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN = 0.693;
const STRING = "string";
const ZERO = 0;
const TEN = 10;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
    if (sampleActivity === undefined || STRING !== typeof sampleActivity || sampleActivity.length <= ZERO) {
        return false;
    }

    let parsed = parseInt(sampleActivity, TEN);

    if (isNaN(parsed)) {
        return false;
    }

    return Math.ceil(Math.log(MODERN_ACTIVITY / parsed) / (LN / HALF_LIFE_PERIOD));
}
/*
console.log(dateSample('8')); // => 5200
console.log('-------------------------');
console.log(dateSample('1')); // => 22387 (or 22392 depending on formula used)
console.log('-------------------------');
console.log(dateSample('WOOT!')); // => false
console.log('-------------------------');
console.log(dateSample()); // => false
*/

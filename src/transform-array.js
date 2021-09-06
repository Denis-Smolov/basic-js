const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';
const ZERO = 0;
const ONE = 1;
const ERROR_TEXT = '\'arr\' parameter must be an instance of the Array!';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error(ERROR_TEXT);
    }

    let result = [];
    let isDiscardNext = false;
    let isDoubleNext = false;

    for (let i = 0; i < arr.length; i++) {
        if (isDiscardNext) {
            isDiscardNext = false;
            continue;
        }

        let element = arr[i];

        if (Number.isInteger(element)) {
            if (isDoubleNext) {
                result.push(element);
                isDoubleNext = false;
            }

            result.push(element);

        } else if (DISCARD_NEXT === element) {
            isDiscardNext = true;

        } else if (DISCARD_PREV === element && i > ZERO) {
            result.splice(i - ONE, ONE);

        } else if (DOUBLE_NEXT === element) {
            isDoubleNext = true;

        } else if (DOUBLE_PREV === element) {
            if (i > ZERO) {
                result.push(arr[i - ONE]);
            }
        }
    }
    return result;
}

// transform(777);

// console.log(JSON.stringify([1, 2, 3, 4, 4, 5]) === JSON.stringify(transform([1, 2, 3, '--double-next', 4, 5])));
// console.log(JSON.stringify([1, 2, 4, 5]) === JSON.stringify(transform([1, 2, 3, '--discard-prev', 4, 5])));
// console.log(JSON.stringify([1, 2, 3, 5]) === JSON.stringify(transform([1, 2, 3, '--discard-next', 4, 5])));
// console.log(JSON.stringify([1, 2, 3, 3, 4, 5]) === JSON.stringify(transform([1, 2, 3, '--double-prev', 4, 5])));
// console.log(JSON.stringify([1, 2, 3, 4, 4]) === JSON.stringify(transform([1, 2, 3, '--double-next', 4, '--discard-next', 5])));
// console.log(JSON.stringify([1, 3, 4, 5]) === JSON.stringify(transform([1, '--discard-next', 2, '--discard-prev', 3, 4, 5])));
// console.log(JSON.stringify([2, 4, 5]) === JSON.stringify(transform([1, '--discard-prev', 2, '--discard-next', 3, 4, 5])));

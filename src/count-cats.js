/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

const ZERO = 0;

export default function countCats(matrix) {
    if (!Array.isArray(matrix) || matrix.length === ZERO) {
        return false;
    }

    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '^^') {
                result++;
            }
        }
    }

    return result;
}

/*let z;
z = countCats([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]]);
console.log(Number.isInteger(z));
console.log(z);

z = countCats([[0, 1, 3], [0, 5, 2], [9, 1, 2]]);
console.log(Number.isInteger(z));
console.log(z);*/

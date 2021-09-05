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

const CAT = '^^';

function countCats(matrix) {
    const length = matrix.length;
    let result = 0;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (matrix[i][j] === CAT) {
                result++;
            }
        }
    }

    return result;
}

countCats([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]]);

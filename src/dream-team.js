/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

const ZERO = 0;
const STRING = "string";

export default function createDreamTeam(members) {
    if (!Array.isArray(members) || members.length === ZERO) {
        return false;
    }

    let letters = [];

    members.forEach(function (item) {
        if (STRING === typeof item) {
            letters.push(item.charAt(ZERO).toUpperCase());
        }
    });

    let sorted = letters.sort();
    let result = '';

    if (sorted.length !== 0) {
        for (let i = 0; i < sorted.length; i++) {
            result += sorted[i];
        }

    }

    return result;
}

/*
let z;
z = createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']); // => 'ADMM'
console.log(z);

z = createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]); // => 'LOO'
console.log(z);

z = createDreamTeam(['Matt Ttt', 'Ann Xxx', 'Dmitry Zzz']);
console.log(z);

z = createDreamTeam([]);
console.log(z);

z = createDreamTeam('check');
console.log(z);
*/

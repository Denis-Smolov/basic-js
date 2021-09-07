/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {

    constructor() {
        this.result = 1;
        this.temporary = 1;
    }

    calculateDepth(arr) {
        for (let element of arr) {
            if (element instanceof Array) {
                this.temporary++;
                this.calculateDepth(element);
            }
        }
        if (this.temporary > this.result) {
            this.result = this.temporary;
        }
        this.temporary--;

        let returnedResult = this.result;
        if (this.temporary === 0) {
            this.result = 1;
            this.temporary = 1;
        }
        return returnedResult;
    }

}

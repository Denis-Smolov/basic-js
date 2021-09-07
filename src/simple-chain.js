const LINK_1 = '~~';
const LINK_2 = '( ';
const LINK_3 = ')';
const LINK_4 = ' )';
const ERROR_TEXT = 'You can\'t remove incorrect link!';

let chainLinks;

/**
 * Implement chainMaker object according to task description
 */
export default {
    chainLinks,

    init() {
        if (chainLinks === undefined) {
            chainLinks = [];
        }
        return chainLinks;
    },

    getLength() {
        this.init();
        return chainLinks.length;
    },

    addLink(value) {
        this.init();
        chainLinks.push(value === undefined ? '*' : value);
        return this;
    },

    removeLink(position) {
        this.init();
        if (position === null || position === undefined || Number.isNaN(position) || !Number.isInteger(position)
            || position <= 0 || position > this.getLength()) {
            throw new Error(ERROR_TEXT);
        }
        chainLinks.splice(position - 1, 1);
        return this;
    },

    reverseChain() {
        this.init();
        let reversed = [];

        for (let i = this.getLength() - 1; i >= 0; i--) {
            reversed = reversed.concat(chainLinks[i]);
        }
        chainLinks = reversed;
        return this;
    },

    finishChain() {
        this.init();
        let result = '';
        for (let i = 0; i < this.getLength(); i++) {
            let element = chainLinks[i];
            if (i !== 0) {
                result = result.concat(LINK_1);
            }
            result = element === '*' ? result.concat(LINK_2).concat(LINK_3) : result.concat(LINK_2).concat(element).concat(LINK_4);
        }
        chainLinks = [];
        return result;
    }
}

// let chainMaker = new ChainMaker();
// console.log(chainMaker.addLink().addLink(2).addLink().finishChain()); // => '( )~~( 2 )~~( )'
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain()); // => '( 1 )~~( 2 )~~( 3 )'
// console.log(chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()); // => '( 2 )~~( 3 )'
// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3);
// console.log(chainMaker.getLength());
// chainMaker.finishChain();
// console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()); // => '( 2 )~~( 1 )~~( 3 )'
// console.log(chainMaker.addLink(1).addLink(2).removeLink(9).addLink(3).finishChain()); // ERROR

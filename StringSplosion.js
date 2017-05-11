/* jshint esversion: 6 */
"use strict";

class StringSplosion {
    constructor(input) {
        this.inputString = input;
    }

    manipulate() {
        const stringArray = [];
        for(let counter = 1; counter <= this.inputString.length; counter++){
            let subString = this.inputString.substr(0, counter);
            stringArray.push(subString);
        }
        return stringArray.join('');
    }
}

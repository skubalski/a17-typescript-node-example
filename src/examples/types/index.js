'use strict';
class C {
    constructor(params) {
        this.test2 = params.test2;
        this.test1 = params.test1;
    }

    public trimTest1() {
        return this.test1.trim();
    }

    public fixedTest2() {
        return this.test2.toFixed(2);
    }
}

const c = new C({test1: 123.1232323, test2: ' test '});
console.log(c.trimTest1()); // error only when this code is running
console.log(c.fixedTest2()); // error only when this code is running
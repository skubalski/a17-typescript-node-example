'use strict';

interface IA {
    test1: String;
    test2: Number;
}

class C {
    public test1: String;
    public test2: Number;

    constructor(params: IA) {
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

const c = new C({test1: 123.1232323, test2: ' test '}); //compilation error
console.log(c.trimTest1());
console.log(c.fixedTest2());
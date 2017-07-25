'use strict';
class A {
}

class B extends A {
    constructor() {
        super();
        console.log(this.test1);
        console.log(this.test2);
        console.log(this.test3);
        console.log(this.test4);
    }
}

const b = new B();
console.log(b.test1);
console.log(b.test2);
console.log(b.test3);
console.log(b.test4);
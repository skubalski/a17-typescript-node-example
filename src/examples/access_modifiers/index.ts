'use strict';
class A {
    private test1: String;
    protected test2: Number;
    public test3: Boolean;
}

class B extends A {
    constructor() {
        super();
        console.log(this.test1); // access denied
        console.log(this.test2);
        console.log(this.test3);
        console.log(this.test4); // test4 doesn't exist
    }
}

const b = new B();
console.log(b.test1); // access denied
console.log(b.test2); // access denied
console.log(b.test3);
console.log(b.test4); // test4 doesn't exist
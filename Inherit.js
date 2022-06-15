/** 
* @description  继承实现
* @author hu_ty
* @since 
* @param (*) 
* 
*/

// ES5 继承（寄生组合继承）
function Parent(name) {
    this.name = name
}
Parent.prototype.eat = function () {
    console.log('Parent',this.name + 'is eating');
}

function Child(name, age) {
    Parent.call(this, name)
    this.age = age
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

// test
let xm = new Child('xiaoming', 20)
console.log('xm.name',xm.name);
console.log('xm.age',xm.age);
xm.eat()


// ES6 继承
class Parent {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log('Parent',this.name + 'is eating');
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}

// TEST
let xm = new Child('xiaoming', 20)
console.log('xm.name',xm.name);
console.log('xm.age',xm.age);
xm.eat()


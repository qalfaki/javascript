#### Object oriented programming with javascript

* A programming model based around the idea of objects
* These objects are constructed from what are called "classes", which we can think of like blueprint of something. We call these objects created from classes "instances"
* We strive to make our classes abstract and modular

##### 'new' keyword

> used with a function
1. it creates an empty object
2. it sets the empty opbject to the `this` in the function (constructor)
3. it adds `return this` to the function
4. it adds a prototype on the constructer function to the empty object `__proto__`



#### prototypes

Understanding the relationship between

* __proto__
* prototype
* constructor

Understsind the difference between methods on the constructer vs on the prototype

> Every constructor function has a property called "prototype", which is an object
> The "prototype" object has a property called "constructor", which points back to the constructor function

> the way objects (instances) get access to the prototype properties, is throught "__proto__"
> this link get established when the `new` keyword is used


#### code example

```
function Person(name) {
	this.name = name;
}

var john = new Person('John');
john.__proto__ === Person.prototype // true
Person.prototype.constructor === Person //true

```
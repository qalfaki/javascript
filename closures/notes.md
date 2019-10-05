#### Closures


##### objectives
* Understand what a closure is and what it is not
* Use a closure to emulate pricate variable
* List use cases for closures in the real world


##### Closure definition

A closure is a function that makes use of variables defined in outer functions that have previously returned
it (inner function) keeps track of the variables it needs only from the outer fuunction that has returned already

closure are used to create private variables and allow isolatition of logic from the application

> when dealing with objects in closures make sure to return copies and not the original objects



###### Closures example


```
var classSubjects = function() {
	var subjects = ['math', 'secience', 'history'];
	return function() {
		return {
			addSubject: function(subject) {
				subjects.push(subject);
				return this.getSubjects();
			},
			getSubjects() {
				return subjects.slice()
			},
		}
	}
}
```


#### keyword `this`

* usually determined by how a function is called (execution context)
* can be determined using the four rules

>global context // when its not declared inside an object 
>object/implicit
>explicit
>new 
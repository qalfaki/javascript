### testing with jasmine

#### objectives
* Understand what Jasmine and unit testing are
* Define describe, it, matchers, and spies
* Write better tests with before and after hooks
* Write asynchronous tests with clocks and done callbacks
* Compare and contrast TDD and BDD and differentiate between unit and other types of testing
* Write unit tests using Jasmine!


#### Unit tests

> test parts of an application, (or units). Very commonly, each unit is tested individually and independentl to ensure an application is running as expected

#### Essntial keywords

`describe`
> its used to "describe" something to Jasmine, one describe block per unit that is being tested


`it`
> used inside `describe` functions. `it` is used to write code with more details that will describe what is expected from the function. Each `it` function corspond to a test and its usually called a `spec`.

`expect`

> lives inside of the `it` function and is where we make expectations or assertion about what we're testing, if any of our expected functionalities is wrong, the test will fail.


#### Conceptual exercise

```
describe('Sun')
	it('is round')
		expect('sun.isRound.toBe(true)')
	it('is hot')
		expect(sun.isHot.toBe(true))
	it(is a planet)
		expect(sun.isPlanet.toBe(true))  // test will fail at this point (the sun is a star!)
```


#### code
```
var sun = {
    isRound: true,
    hot: true,
    isPlanet: false
};

describe('Sun', function(){
  it('is round', function(){
    expect(sun.isRound).toBe(true)
  });
 	it('is hot', function(){
 		expect(sun.hot).toBe(true)
  })
 	it('is a Planet', function(){
		expect(sun.isPlanet).toBe(true)
})
```

#### Matchers

> functions we attach to the results of the `expect` function

some of them are:

* toBe /not.toBe tripple equals `===` 
* toBeCloseTo; compares 2 values and takes a second parameter for precision, this useful when we only care if something similar but not exactly the same
* toBeDefined; helpful when making sure a variable is not undefined
* toBeFalsy/toBeTruthy
* toBEGreaterThan/toBeLessThan
* toContain; check if a value is contained in an array
* toEqual; not to confuse with `toBe`! it takes 2 objects and compare thier values and ignores objects memory references

#### type check

> `jasmine.any()`


#### reseting shared variables

> `beforeEach(callback)` get called before `it` functions

#### teardown

> `afterEach(callback)`; called after `it` useful to keep data the same between the tests


#### pending test

> `xit` instead of `it` or not passing a callback function to `it` function and all `pending()`

#### spies

* A spy can mimic any function and trace it calls to it and all arguments
* Spies only exists in the `describe` or `it` blocks in which `it` is defined
* Spies are removed after every spec/test.

- Two ways of creating spies:
`spyOn(function)` can only be used on the method exists in an object (existing functions)
`jasmin.createSpy()` returns new function


Example:

Note that spies allow you to mock functions or its expected returned values this is useful if the original functions is expensive to call or relay on external resources eg. APIs
```
function add(a, b) {
	return a + b
}

describe('add' ()=>{
	var mySpy, result;
	beforeEach(()=> {
		mySpy = spyOn(window, 'add').and.callThrough();
		result = mySpy(1, 2);
	});
	it('excepts params', ()=>{
			expect(mySpy).toHaveBeenCalled();
			expect(mySpy).toHaveBeenCalledWith(1, 2)
	});
	it('test result', ()=>{
		expect(mySpy).toEqual(3);
	});


	// testing call frequency (how many times a function being called)

	it('function call tests', ()=>{
		// was the function called ?
		expect(mySpy.calls.any()).toBe(true);
		//was it called once ?
		expect(mySpy.calls.count()).toBe(1);
		// test the result
		expect(result).toEqual(3)
	})
});
```


#### Time dependent code & async code

`Clock`

Example:

```
desribe('testing with clock', ()=>{
	var aFunction;
	// remember to install clock before each `it`
	beforeEach(()=>{
		aFunction = jasmine.createSpy('someFunction');
		jasmine.clock.install();
	});
	// remember to uninstall clock before each `it`
	afterEach(()=>{
		jasmine.clock.uninstall();
	});

	it('invoke after 1 second', ()=>{
		setTimeout(()=>{
			aFunction();
		}, 1000);

		jasmine.clock.tik(999);
		expected(aFunction).not.toHaveBeenCalled();
		jasmine.clock.tick(1);
		expect(aFunction).toHaveBeenCalled();
	})
})
```

Async tests:

Jasmine allows you to pass a callback function commonly called "done"
that should be called when the `async` code completed

```
funtion getProfileInfo(userId) {
	// this will return a promise
	return $.getJSON(`https://baseUrl/subResource/${userId}`);
}

describe('test ajax call', ()=>{
	it('return user profile data', (done)=>{
		getProfileInfo(12345).then((data)=>{
			expect(data.id).toBe(12345);
			done();
		});
	}
});
```
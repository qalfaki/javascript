//  constructors

function Dog(name, age) {
	this.name = name;
	this.age = age;
	this.bark = function() {
		console.log(this.name + ' just barked!')
	}
}


function Vehicle(model, make, year) {
	this.model = model;
	this.make = make;
	this.year = year;
	this.isRunning = false;
}

Vehicle.prototype.honk = function() {
	if (this.isRunning) console.log('beep!')
};

Vehicle.prototype.trunOff = function() {
	this.isRunning = false;
};

Vehicle.prototype.trunOn = function() {
	this.isRunning = true;
};

function Car(model, make, year, wheels) {
	// Vehicle.apply(this, [model, make, year]);
	// Vehicle.call(this, model, make, year);
	Vehicle.apply(this, arguments);
	this.wheels = 4;
}

function MotorBike(model, make, year, wheels) {
	// Vehicle.apply(this, [model, make, year]);
	// Vehicle.call(this, model, make, year);
	Vehicle.apply(this, arguments);
	this.wheels = 2;
}


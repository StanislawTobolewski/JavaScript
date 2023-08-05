//JavaScript
'use strict';


//Object
/*
const jonas = {
	firstName: "Jonas",
	secondName: "Johnson",
	birthYear: 1991,
	age: 37,
	job: "teacher",
	friends: ["Michael", "Peter", "Steven"],
	hasDrivingLicense: true,
	
	calcAge: function (){
	return 2037 - this.birthYear;
	},
	
	showData: function(){
		console.log(`${this.firstName} is a ${this.age} years old ${this.job}.`);
	}
	
};
console.log(jonas.calcAge());
jonas.showData();
*/


const mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
		
	calcBMI: function(){
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
	}
};

const john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	
	calcBMI: function(){
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
	}
};

mark.calcBMI();
john.calcBMI();

console.log(`${john.fullName}'s BMI (${john.BMI}) is ${john.BMI>mark.BMI ? "higher" : "lower"} than ${mark.fullName}'s (${mark.BMI})!`);

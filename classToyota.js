//classToyota
//Make a constructore Toyota
//it should accpect model and color when creating a unique object.
//shared key is make= toyota
// create an inherited function called drive
//which logs driving a Silver Toyota Corrolla.

var Toyota = function(model, color){
	this.make= `Toyota`
	this.model= model
	this.color = color
	var mileage =0;

	this.drive = function (){
	mileage++;
	console.log(`I am driving a ${this.color}  ${this.make} ${this.model}. Its mileage is ${mileage}.`)
}
}

// Toyota.prototype.drive = function (){
// 	mileage++;
// 	console.log(`I am driving a ${this.color}  ${this.make} ${this.model}. Its mileage is ${mileage}.`)
// }


// practising private member mileage;

Toyota.prototype.changeColor= function(color) { this.color= color}
Toyota.prototype.changeModel= function(m){ this.model = m}
var myCar = new Toyota(`Corrolla`,`Silver`)
myCar.drive()
myCar.changeColor(`Black`)
myCar.changeModel(`Crown`)
myCar.drive()


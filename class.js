class Toyota{
	constructor(model, color){
		this.make= `Toyota`
		this.model= model
		this.color = color
		var mileage =0;

		this.drive = function (){
			mileage++;
			console.log(`I am driving a ${this.color}  ${this.make} ${this.model}. Its mileage is ${mileage}.`)
		}

	}

	changeColor(color) { this.color= color}
	changeModel(m){ this.model = m}

}

var myCar = new Toyota(`Corrolla`,`Silver`)
myCar.drive()
myCar.changeColor(`Black`)
myCar.changeModel(`Crown`)
myCar.drive()
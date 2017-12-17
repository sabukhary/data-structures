//writing a class
function ItemOld(name){

	var obj ={};
	obj.name =name;
	obj.important =false;
	obj.completed=false;
	obj.makeImportant = function () {
		this.important = !this.important
	}
	obj.makeCompleted=  function(){
		this.completed = ! this.completed
	}
	return obj;
}
function Item(name){

	this.name =name;
	this.important =false;
	this.completed=false;
	Item.prototype.makeImportant = function () {
		this.important = !this.important
	}
	Item.prototype.makeCompleted=  function(){
		this.completed = ! this.completed
	}
}
// creating an object;
var attendance = Item(`attendance`);
attendance.makeImportant()
attendance.makeCompleted()


//console.log(attendance);
console.log(Item)
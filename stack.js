class Stack{

	constructor (){
		var storage=[];

		this.push=function(value){
			storage.push(value);
		}
		this.pop=function(){
			return storage.pop();
		}
		this.length=function(){
		return storage.length;
		}
	}
	
}

var s = new Stack()
s.push(`First`)
s.push(`Second`)
s.push('third')
var v =s.pop()
console.log(v)
s.push(1)

// console.log(s)
console.log(s.length());
console.log(s)








// function Queue() {

//   this.storage = [];
// };
// Queue.prototype.enqueue= function(value){
// 	this.storage.push(value);
// }
// Queue.prototype.dequeue=function(){
// 	return this.storage.shift();
// }
// Queue.prototype.size=function(){
// 	return this.storage.length();
// }
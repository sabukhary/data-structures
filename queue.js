class Queue{

	constructor (){
		this.storage=[];
	}
	enqueue(value){
		this.storage.push(value);
	}
	dequeue(){
		return this.storage.shift();
	}
	length(){
		return this.storage.length;
	}
}

var q = new Queue
q.enqueue(`First`)
q.enqueue(`Second`)
q.enqueue('third')
console.log(q)
console.log(q.length());








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
function testClosure(){
	var counter =0;
	var obj ={
		add: function(){counter++},
		show: function(){console.log(counter)}

	}
	return obj;
}

var counterObj = testClosure();
console.dir(counterObj.add);
counterObj.show()
counterObj.add()
counterObj.show()
//privacy

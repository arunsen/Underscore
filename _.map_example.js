var utilityArray1 = [{
 "Name" : "BOB",
 "age" : 27
}, {
 "Name" : "Kevin",
 "age" : 22
}];

var utilityArray2 = [{
 "Name" : "BOB",
 "age" : 27
}, {
 "Name" : "Kevin",
 "age" : 22
}];

var mappedArray = _.map(utilityArray1, function(Obj1) {
	return Obj1.age + 1;
});
console.log("==== Mapped Array ===\n " + JSON.stringify(mappedArray))

var utilityArray1 = [{
 "Name" : "BOB",
 "age" : 27
}, {
 "Name" : "Kevin",
 "age" : 22
}];

var utilityArray2 = [{
 "Name" : "Randy",
 "age" : 27
}, {
 "Name" : "Peter",
 "age" : 21
}];

_.each(utilityArray1, function(Obj1) {
    console.log("==== Name in utilityArray1 ===\n " + Obj1.Name);
    console.log("==== Age in utilityArray1 ===\n " + Obj1["age"]);
    _.each(utilityArray2, function(Obj2) {
        if (Obj2["age"] === Obj1.age) {
            console.log("==== Name in utilityArray2===\n " + Obj2.Name);
            console.log("==== Age in utilityArray2===\n " + Obj2["age"]);
        }
    });
});

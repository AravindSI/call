

//call
var obj={num:4};
var mulToThis=function(a){
    return this.num *a;
}
console.log(mulToThis.call(obj,8));

//apply
var obj={num:4};
var mulToThis=function(a,b,c,d){
    return this.num *a*b*c*d;
}
var arr=[2,3,4,5];
console.log(mulToThis.apply(obj,arr));

//bind
var obj={num:4};
var mulToThis=function(a,b,c,d){
    return this.num *a*b*c*d;
}
var bound=mulToThis.bind(obj);
console.log(bound(1,2,3,4));
/*
 Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
Dont pass in args. Read from 'this' and use BIND*/
var student = {
      age:20,
    function () {
        
        return this.age;
    }
};

var printAge = function() {
    console.log(this.age);
};

var AgeofStudent = printAge.bind(student);

AgeofStudent();
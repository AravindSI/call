//bind method
let multiply=function(x,y){
    console.log(x*y);
}
let multiplyByTwo=multiply.bind(this,3);
multiplyByTwo(5);
let multiplyByThree=multiply.bind(this,6);
multiplyByThree(7);
//closure method
let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByThree=multiply(5);
multiplyByThree(7);


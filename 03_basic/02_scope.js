// let a=20
// const b=30
// var c=30

// console.log(a);
// console.log(b);
// console.log(c);// YAHA TAK SAB KUCHH SAHI CHAL RAHA THA 

//var c=100 // global scope
if(true){
let a=20
const b=30
//var c=30 // block scope
}
// console.log(a);
// console.log(b); YE DONO V SAHI HAI OR JAISAS HONA CHAHIYE WAISA HI HUA HAI
//console.log(c);// that's why we ignore var 

function one(){
    const username="keshv"
    function two(){
        const user2="deo"
       // console.log(username);
    }
    //console.log(user2);
    two();
    
}
one()

console.log(addTwo(4))   //

function addTwo(num){
    return num+2;
}


console.log(addOne(6));// if we declare a function into a variable then we can't call function like this

const addOne=function(even){
    return even +2
}
//console.log(addOne(6));


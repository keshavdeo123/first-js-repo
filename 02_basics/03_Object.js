// singleton
//Object.create

//object Literals 
const mysym=Symbol("Key1")

const JSuser={
    name:"Keshav",
    //mysym:"my key1", this is not correct method to declare a symbol
    [mysym]:"MYkey1",
    location:"Darbhanga",
    roll:18,
    email:"keshav@123",
    isLoggedin:false,

}
// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["location"]);
// console.log(JSuser[mysym]);
//console.log(typeof(JSuser[mysym]));
// Value KO ACCESS DOT SE YA [SQUARE BRACKET SE KIYA JATA HAI]
// JSuser.email="deo123"
// Object.freeze(JSuser)
// JSuser.email="kcoiioffioci"
// console.log(JSuser);

JSuser.greeting=function(){
    console.log("Hello JS user ");
    
}
console.log(JSuser.greeting());

JSuser.greetingTwo=function(){
    console.log(`Hello JS user ,${JSuser.name}`);
    
}
console.log(JSuser.greetingTwo());







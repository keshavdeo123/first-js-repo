// Primitive 7 Types => String , Number, Boolean, null,Undefined , symbol , BigInt

// Refrence (Non Primitive )
// Arrays , Objects , Functions

//******************************************************************************************************************** */
// Stack And Heap Memory
// stack(Primitive ) , Heap(NOn Primitive)

let myEmail="Keshav@1223"

let NewEmail=myEmail
NewEmail="deo123"

console.log(NewEmail);
console.log(myEmail);

let userOne = {
    Name:"Keshav Deo",
    email:"keshav@123"
}
let userTwo=userOne;

userOne.email="Deo@123"

console.log(userOne.email);
console.log(userTwo.email)



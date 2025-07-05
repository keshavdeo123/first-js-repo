function myName(){
    console.log("keshav");
    console.log("deo");
    
}
//myName()

function addTwoNum(number1,number2) {
        let  sum= number1+number2
            return sum
                
                    
                    }
                    const sum=addTwoNum(5+1,50)
                   // console.log(sum);

// Function part 2

// function calculatecartPrice(num1){
// return num1
// }
// console.log(calculatecartPrice(10,20,30));  yaha hm kitna v argument pass kare lekin ek hi pass hota hai
// function calculatecartPrice(...num1){//... is rest operator
    
// return num1
// }
// console.log(calculatecartPrice(10,20,30));


function calculatecartPrice(val1,val2,...num1){
    
return num1
}
//console.log(calculatecartPrice(10,20,50,60,100,500,30));
// output: 50,60,100,500,30

const user={
    username:"keshav",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
//handleObject(user)
handleObject({
    username:"Deo",// we can pass directly or declaring a variable this is also applicable
    price:399
})
const user={
    username:"Keshav",
    price:999,

    welcomeMessege: function(){
        // console.log(`${this.username},welcome to this website` );
    }
}
user.welcomeMessege()
//console.log(this);

// function chai(){
//     let username="Keshav"
//     console.log(this.username);// this works only inside user
    
// }
// chai() 
// const chai=function(){
//     let username="Keshav"
//     console.log(this.username);  output will comes undefined
    
// }

// const chai= () =>{  // Arrow function

//     let username="Keshav"
//     console.log(this.username); YAHA V YE THIS UNDEFINED HI HOGA
// }
// chai()

// const addTwo=(num1,num2)=>{
//    return num1+num2
// }
// const addTwo=(num1,num2)=> num1+num2// implicit return
const addTwo=(num1,num2)=> (num1+num2)// agar {curly braces rahega to return keyword lagana hoga or agar () hoga to nhi lgana hoga}
console.log(addTwo(5,41));


// Immediately Invoke  function expression
// function one(){
//     console.log(`hey this is Keshav Deo`);
    
// }
// one()  THIS IS TRADITIONL WAY TO REPRESENT A FUNCTION

(function one(){
    //console.log(`hey this is Keshav Deo`);
    
})(); // THIS IS IIFE OR
// IIFE IS USED TO AVOID POLLUTING GLOBAL NAMESPCE 
// (

// )() THIS FUNCTION EXUCTED IMMEDIATELY

((nameId) => {
  console.log(`Keshav ${nameId}`);
  
})(deo);
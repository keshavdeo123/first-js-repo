const accountId=854181
let accountEmail="keshav@123.com"
var accountpassword="12345" //prefer not to use var 
accountCity="jaipur" //we can declare variable without using let,var in JS
let accountState;// agar JS ke andar variable declare karke chhor dete hai to usko undefined mana jata hai

// accountId=456 const can't be reassigned 
accountEmail="deo@gmail.com"
accountpassword="56789"
accountCity="Darbhanga"
console.log(accountId); // In JS semicolon is not necessary to use.we may use

console.table([accountId,accountEmail,accountpassword,accountCity])
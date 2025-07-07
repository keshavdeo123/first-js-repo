const username=[]
if (username) {
    console.log(`code exucted`);
    
}
else{
    console.log(`NE`);
    
}

// Falsy Values 
// 0,-0,false,NULL,bigInt 0n, NaN, Undefined

// Truthy Values 
// "0",'NULL',"False"," ", [],{}, function(){}
// false==0  output=>true
// false==''  output=>true
//0==''  output=>true

//Nullish Coalescing Operator (??) : Null/ Undefined

let val1;
//val1=5??10;  out: 5
//val1=null??12 out: 12
// val1=undefined??13 out: 13



console.log(val1);

// terniry Operator
// condition?true:false

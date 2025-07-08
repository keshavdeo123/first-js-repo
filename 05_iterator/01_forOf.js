// forof
//[" "," "," "," "]
//[{},{},{},{}]

let arr=[1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings="Hello World"
for (const greet of greetings) {
   // console.log(greet);
    
}

// map
const map=new Map();
map.set(1,'a')
map.set(2,'b')
map.set(3,'c')
map.set(4,'d')
map.set(1,'a')// print nhi hoga bcoz map is known for unique value
//console.log(map);

for (const [key,value] of map) {
    console.log(key,':-', value);
    
    
}
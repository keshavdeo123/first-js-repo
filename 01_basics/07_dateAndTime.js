let myDate=new Date()

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);// it is object type. Many times asked in interview

 let newDate= new Date(2025,6,9)
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toDateString());

let myTimestamps=Date.now();
console.log(myTimestamps);

console.log(newDate.getTime());
console.log(newDate.getFullYear());

// console.log(`${myDate.toLocaleDateString()} is present time`)

newDate.toLocaleString('default',{
    weekday: "long"
})








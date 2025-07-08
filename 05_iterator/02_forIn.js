const user1={
    naam:'Keshav',
    rollno:240103145,
    Age:22
}
// for (const [key,value] of user1) {
//     console.log(key,':-',value);
    
// }
//TypeError: user1 is not iterable
for (const key in user1) {
    console.log(`${key},${user1[key]}`);
    
}
//forIn is also valid for array but it is not for map because map is not iterable for forIN

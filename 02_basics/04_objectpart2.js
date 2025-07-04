//const Tinder=new Object() // Singleton object 

const Tinder={} // non singleton object
// Dono cases me output same aate hai

//console.log(Tinder);

const regularUser={
    fullname:{
        username:{
            firstname:"Keshav",
            Lastname:"Deo"
        }

    }
}
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//const obj4={obj1,obj2,obj3}
//const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}// SPREAD, MAXIMUM TIME WE USE
//console.log(obj4)

const user1={
    name:"Keshav",
    email:"keshav@123",
    mobile:65686899646
}
// console.log(Object.keys(user1));
// console.log(Object.values(user1));
// console.log(Object.entries(user1));

// OBJECT DESTRUCTURED
const course ={
    name:"JAVA SCRIPT",
    fee:999,
    courseinstructer:"keshav"
}

const {courseinstructer:instructure}=course
console.log(instructure);

//JSON
{
    "name":"JAVA SCRIPT",
    "fee":999,
    "courseinstructer":"keshav"
}

[
    {},
    {},
    {}
]
//




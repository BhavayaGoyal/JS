// Singleton and constructor 

const instaUser = new Object()

 instaUser.id = "1234"
 instaUser.name = "Karan"
 instaUser.isLoggedIn = false

//  console.log(instaUser)

const regularUser = {
    email: "abc@gmail.com",
    fullname:{
        username: {
            firstname: "bhavaya",
            lastname: "goyal"
        }
    }
}
//console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2} wrong way to merge the objects bcoz its output is not as desired { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3 = Object.assign({}, obj1, obj2) read mdn for target and source

const obj3= {...obj1, ...obj2} //mostly used syntax for merging
// console.log(obj3)

const users = [
    {
        id: 1,
        email:"b@gmail.com"
    },
     {
        id: 2,
        email:"c@gmail.com"
    },
     {
        id: 3,
        email:"d@gmail.com"
    },
]
users[1].email
// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));

const course = {
    name: "Javascript",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor: instructor} = course //destructuring
console.log(instructor) 

// {
//     "name": "bhavaya",
//     "coursename" : "Javascript",
//     "price": "free"
// }

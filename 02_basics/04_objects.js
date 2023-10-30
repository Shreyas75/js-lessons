const tinderUser = new Object() // Singleton object
// const tindyUser = {} // literal object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "bob@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Joe",
            lastName: "Berger"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3)
// console.log(obj1)
// console.log(obj2)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)


const users = [
    {
        id: 0,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2,
        email: "2@gmail.com"
    },
]

console.log(users[0].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
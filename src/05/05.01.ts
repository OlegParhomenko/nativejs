export type ManType = {
    name: string
    age: number
}

const people: ManType[]  = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexandr Petrov ", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

const dimychTransormator = (man: ManType) => ({
        stack:["html", "css", "js", "tdd", "react"],
        firstName: man.name.split("-")[0],
        lastName: man.name.split("-")[1]
    })


const devs = [
    {
        stack: ["html", "css", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov",
    },
    {
        stack: ["html", "css", "js", "tdd", "react"],
        firstName: "Alexandr", lastName: "Petrov",
    },
    {
        stack: ["html", "css", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov",
    },
]

let d1 = dimychTransormator(people[0])
let d2 = dimychTransormator(people[1])
let d3 = dimychTransormator(people[2])

const devs2 = [
    d1, d2, d3
]

const devs3 = people.map(dimychTransormator)
const devs4 = people.map( man => ({
    stack:["html", "css", "js", "tdd", "react"],
    firstName: man.name.split("-")[0],
    lastName: man.name.split("-")[1]
}))

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}! Welcome to our destiny`)
export const createGreetingMessage =  (people:Array<ManType>) => {
   return   people.map(man => `Hello ${man.name.split(" ")[0]}! Welcome to our destiny`)
}
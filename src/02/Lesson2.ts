type LocalCityType  = {
    title:  string;
    countryTitle: string;
}

type AdressType ={
    streetTitle:string;
    city:LocalCityType
}

type TechType ={
    id: number;
    title: string;
}

type StudentType = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    address: AdressType
    technologies: Array<TechType>
}


const student:StudentType = {
    id: 1,
    name: "Oleg",
    age: 30,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CSS",
        },
        {
            id: 3,
            title: "React",
        },

    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)
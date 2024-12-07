const ages = [18, 24, 90, 46, 38, 30, 25]

const predicate = (age: number) => {
    return age > 70
}

type CoursesType = {
    title: string
    cost: number
}

const courses = [
    {title: 'HTML+CSS', cost : 120},
    {title: 'JS', cost : 270},
    {title: 'REACT', cost : 360}
]

const cheaveCourses = (courses: CoursesType, cost: number) => {
    return courses.cost < 160
}
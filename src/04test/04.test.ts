test('should take old men older than 90',() => {
    const ages = [18, 24, 90, 46, 38, 30, 25]
    const predicate = (age: number) => {
        return age > 70
    }

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(90);
})

test('should cost courses bigger than 150',() => {
    const courses = [
        {title: 'HTML+CSS', cost : 120},
        {title: 'JS', cost : 270},
        {title: 'REACT', cost : 360}
    ]

    const cheaveCourses = (courses: CoursesType, cost: number) => {
        return courses.cost > 150
    }

    const myCourses = courses.filter(cheaveCourses)

    expect(myCourses.length).toBe(2);
    expect(myCourses[0].title).toBe('JS')
    expect(myCourses[1].title).toBe('REACT')
})

test('get only completed task', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Cheese', isDone: true},
        {id: 4, title: 'Meet', isDone: true},
    ]

    const completedTask = tasks.filter(task => task.isDone)

    expect(completedTask.length).toBe(2)
    expect(completedTask[0].id).toBe(3)
    expect(completedTask[1].id).toBe(4)
})
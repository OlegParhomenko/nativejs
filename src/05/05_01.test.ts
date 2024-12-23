import {createGreetingMessage, ManType} from "./05.01";

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexandr Petrov ", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

beforeEach( () => {

})

test('should get array of greeeting messages', () => {

    const messages = createGreetingMessage(people)
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Andrew! Welcome to our destiny')
    expect(messages[1]).toBe('Hello Alexandr! Welcome to our destiny')
    expect(messages[2]).toBe('Hello Dmitry! Welcome to our destiny')
})
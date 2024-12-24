import {ManType} from "../05/05.01";
import {manType} from "./destructuring";

let props: any // Объявляем переменную на верхнем уровне

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Gagarina street'
            }
        }
    };
});

test('Деструктуризация props', () => {
    const age = props.age; // Деструктуризация
    const lessons = props.lessons;
    const {title} = props.address.street;

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);
    expect(title).toBe('Gagarina street');
});

test('Доступ к первому уроку', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1,...restLessons] = props.lessons

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2')// Проверяем title первого урока
    expect(ls1.title).toBe('1');
    expect(restLessons.length).toBe(2);
    expect(restLessons[1].name).toBe('react');
    
});

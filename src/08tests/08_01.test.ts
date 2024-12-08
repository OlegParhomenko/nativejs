import {userObj} from "./08_01";

type UsersType = {
    [key: string]: {id: number, name: string}
}

 let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dymich'},
        '1211': {id: 1211, name: 'Natasha'},
        '3232154': {id: 3232154, name: 'Valera'},
        '77': {id: 77, name: 'Katya'},
    }
})

test('should select corresponding user from obj', () => {
    users['77'].name = 'Ekaterina'

    expect(users['77'].name).toEqual('Ekaterina')
})

test('should delete corresponding user', () => {
    delete users['77']

    expect(users['77']).toBeUndefined()
})
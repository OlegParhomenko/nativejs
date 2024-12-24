import React, {useState} from "react";

export type manType = {
    name: string
    age: number
    lessons:Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

export type PropsType = {
    title: string
    man: manType
}



const ManComponent: React.FC<PropsType> = ({title, man, ...props})  =>{

    // const { name } = props.man - аналог большой вложенности но проще...

    const [message, setMessage] = useState('HELLO')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
        </div>
    )

}
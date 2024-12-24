import React, {ChangeEvent} from "react";
import { MouseEvent } from 'react';

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

        alert(event.currentTarget.name);
    }

    const saveUser = () => {
        alert('user have been saved')
    }

    const nameChanged = () => {
        console.log('name changed')
    }

    const ageChanged = (event:  ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + event.currentTarget.value)
    }

    const focusLostHandler = () =>  {
        console.log('lost focus')
    }

    return (
        <div>
            <div>
                <textarea onChange={nameChanged} onBlur={focusLostHandler}>Dimych</textarea>
                <input onChange={ageChanged}/>
            </div>
            <button name='delete' onClick={deleteUser}>Delete</button>
            <div onClick={saveUser}>Save</div>
        </div>
    )
}
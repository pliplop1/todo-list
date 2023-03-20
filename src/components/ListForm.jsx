import { Input } from 'antd';
import React from 'react';

export default function ListForm(props) {
    function handleChange(event) {
        switch (event.target.name) {
            case 'name':
                props.setName(event.target.value);

                break;
            case 'color':
                props.setColor(event.target.value);
                break;
            default:
                break;
        }
    }
    return (
        <form>
            <label htmlFor='name'>Nom</label>
            <Input
                placeholder='Nom de la liste'
                type='text'
                onChange={handleChange}
                value={props.name}
                name='name'
                id='name'
            />
            <label htmlFor='color'>Couleur</label>
            <Input
                type='color'
                oneChange={handleChange}
                value={props.color}
                name='color'
                id='color'
            />
        </form>
    );
}

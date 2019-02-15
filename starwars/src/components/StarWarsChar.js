import React from 'react';
import './StarWars.css';

const StarWarsChar = props => {
    return (
        <div>
            <h2> {props.char.name}</h2>
        </div>
    )
}

export default StarWarsChar;
import React from 'react';
import './StarWars.css';

const StarWarsChar = props => {
    return (
        <div className ="char-card">
            <h2> {props.char.name}</h2>
        </div>
    )
}

export default StarWarsChar;
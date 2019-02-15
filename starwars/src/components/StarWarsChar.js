import React from 'react';

import './StarWars.css';

const StarWarsChar = props => {
    return (
        <div className ="char-card">
            <h2> {props.char.name}</h2>
            <h4>Birth Year: {props.char.birth_year}</h4>
        </div>
    );
};

export default StarWarsChar;
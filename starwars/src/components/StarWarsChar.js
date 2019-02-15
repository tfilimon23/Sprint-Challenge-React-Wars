import React from 'react';

import './StarWars.css';

const StarWarsChar = ({char}) => {
    const {name, birth_year} = char
    return (
        <div className ="char-card">
            <h2> {name}</h2>
            <h4>Birth Year: {birth_year}</h4>
        </div>
    );
};

export default StarWarsChar;
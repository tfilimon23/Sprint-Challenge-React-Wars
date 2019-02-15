import React from 'react';
import './StarWars.css';
import StarWarsChar from './StarWarsChar';


const StarWarsCharsList = props => {
    return(
        <div className = "chars-list">
            {props.starwarsChars.map(char => (
                <StarWarsChar 
                key = {char.created}
                char ={char} />
            ))}
        </div>
    );
};


export default StarWarsCharsList;
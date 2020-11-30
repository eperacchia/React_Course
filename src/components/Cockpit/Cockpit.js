import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    const aggignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
      aggignedClasses.push(classes.Red);
    }
    if(props.persons.length <=1){
      aggignedClasses.push(classes.Bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={aggignedClasses.join(' ')}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.clicked}> Toggle Persons </button>
        </div>
    )
    
};


export default cockpit; 
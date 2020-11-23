import React from 'react';
import classes from './Person.css';

const person = (props) => { 

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Hi, I'm {props.name}  and I am {props.age} y/o!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;
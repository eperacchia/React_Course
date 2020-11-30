import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    //questo metodo è inutile se non si ha un state iniziale nella classe
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true; 
    }

    getSnapshotBeforeUpdate(previousProps, previousState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(previousProps, previousState, snapshot){
        //questo viene eseguito dopo l'update del component, e si può usare per diverse cose
        //ad esempio prendere dati da un server
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render(){
        console.log('[Persons.js] rendering...')

        return this.props.persons.map((p,i)=>{
            return (<Person 
              click={() =>this.props.clicked(i)}
              name={p.name} 
              age={p.age}
              key={p.id}
              changed={(event) => this.props.changed(event, p.id)}/>
            );
        });
    }
    
};



export default Persons;
import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    //questo metodo è inutile se non si ha un state iniziale nella classe
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }


    //questo va bene solo se facciamo il check di poche props, se ne checkiamo di più usiamo PureComponent ( esteso da React ) invece di Component
    //e chiaramente togliamo sholdComponentUpdate, questo perchè PureComponent è un Component che implementa shouldComponentUpdate con un
    //check delle props completo
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(
    //         nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ){
    //         return true; 
    //     }
    //     else{
    //         return false;
    //     }
    // }

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

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
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
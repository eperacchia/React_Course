import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'; 
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constuctor');
    
    //lo state può essere settato dentro il costruttore, ma è un a modalità vecchia, quindi si fa fuori
    /*this.state = {
      persons : [
        {id: 'asd', name: "Edu", age: "28"}, 
        {id: 'dsa', name: "Cami", age: "26"},
        {id: 'fsa', name: "Franky", age: "28"}
      ],
      showPersons: false
    }*/
  }

  state = {
    persons : [
      {id: 'asd', name: "Edu", age: "28"}, 
      {id: 'dsa', name: "Cami", age: "26"}
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true; //true se react deve fare l'update, false altrimenti
    //Ovvero, se è a false, il toggle del button non fa nulla, a true invece mostra le Persons
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //non va bene così perchè vado a mutare l'oggetto principale
    // const person = this.state.persons[personIndex];
    // quindi uso lo spread operator ...
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    //copio array di persons usando lo spread operator sul mio array di persons in state
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons : persons });
  }

  deletePersonHandler = (personIndex) => {
    //questo non è una best practice, perchè abbiamo un puntatore diretto a this.state.persons, che va a modificarne
    //lo stato in modo permanente
    //questi due metodi qui sotto per definire persons come copia di this.state.persons sono equivalenti
    // e sono best practices in quanto non modificano this.state.persons 
    //const persons = this.state.persons 
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] render');
    
    let persons = null;

    if(this.state.showPersons){
      persons = 
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}>
        </Persons>;
    }

    return (
        <div className={classes.App}>
          <button 
            onClick={() => {this.setState({showCockpit:false})}}>
              Remove Cockpit
          </button>
          {
            this.state.showCockpit ?
              <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}>
              </Cockpit> 
              : null
          }
          {persons}
        </div> 
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;

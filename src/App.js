import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  boder: 1px solid red;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  } 
`;

class App extends Component {

  state = {
    persons : [
      {id: 'asd', name: "Edu", age: "28"}, 
      {id: 'dsa', name: "Cami", age: "26"},
      {id: 'fsa', name: "Franky", age: "28"}
    ],
    showPersons: false
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


    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((p,i)=>{
              return <Person 
                click={() =>this.deletePersonHandler(i)}
                name={p.name} 
                age={p.age}
                key={p.id}
                changed={(event) => this.nameChangeHandler(event, p.id)}/>
            })
          }
        </div>
      );


    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton
            alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}> Toggle Persons </StyledButton>
          {persons}
        </div> 
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;

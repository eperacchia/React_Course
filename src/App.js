import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      {name: "Edu", age: "28"}, 
      {name: "Cami", age: "26"}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('clicked');
    // WRONG! //this.state.persons[0].name = 'Eduardo';
    this.setState({
      persons : [
        {name: newName, age: "28"}, 
        {name: "Cami", age: "26"}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name: event.target.value, age: "28"}, 
        {name: "Cami", age: "26"}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      boxshadow: '0 2px 3px #ccc',
      boder: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler("Eduardo!")}>
            Switch name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Edu!")}
          changed={this.nameChangeHandler}>
            Questo posso farlo grazie a props.children
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[0].age}>
        </Person> 
      </div> 
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;

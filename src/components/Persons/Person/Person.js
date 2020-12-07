import React, {Component} from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'

class Person extends Component { 

    //NB: Volendo si può usare React.Fragment ( o anche solo Fragment se lo importo assieme a react)
    // al posto di Auxiliary, quindi non si necessita di creare classi nuove
    render(){
        console.log('[Person.js] rendering...');
        return (
            <Auxiliary>
                {/* <div className={classes.Person}> */}
                <p onClick={this.props.click}>Hi, I'm {this.props.name}  and I am {this.props.age} y/o!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                {/* </div> */}
            </Auxiliary>
            
        )
    }

    
}

export default withClass(Person, classes.Person);
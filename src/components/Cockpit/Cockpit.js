import React, {useEffect} from 'react';
import classes from './Cockpit.css'


const cockpit = (props) => {

  useEffect(()=>{
    console.log('[Cockpit.js] useEffect');
    //Http request

    // const timer = setTimeout( () => {
    //   alert('Save data to cloud');
    // } ,1000);

    setTimeout( () => {
      alert('Save data to cloud');
    } ,1000);

    return () =>{
      // clearTimeout(timer); //se uso questo e assegno il timeout in una const, 
          //posso cancellare l'azione del timeout durante la sua esecuzione
          //quando vado a fare la remove Cockpit
      console.log('[Cockpit.js] cleanup work in useEffect'); 
        //questo funziona solo quando il componente Cockpit.js viene rimosso            
    }

  }, []); //questo array mi serve per poter eseguire la useEffect solo quando cambiano
                       //i componenti nell'array, ad esempio [props.persons]. 
                       //Se l'array è vuoto, la funzione viene eseguita solo
                       //la prima volta,di default, ovvero al component mount e unmount.


  // posso inserire quante useEffect voglio
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    
    return () =>{
      console.log('[Cockpit.js] cleanup work in 2nd useEffect'); 
        //questo funziona solo quando il componente Cockpit.js viene rimosso            
    }

  }); //NB: Questo non contiene un array, quindi viene eseguito ad ogni update

  const aggignedClasses = [];
  let btnClass = '';
  if(props.showPersons){
      btnClass = classes.Red;
  }

  if(props.personsLength <= 2){
    aggignedClasses.push(classes.Red);
  }
  if(props.personsLength <=1){
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


export default React.memo(cockpit); 
//react si ricorda in memoria uno snapshot del component e solo se cambia l'input, quest'ultimo  
//viene renderizzato nuovamente
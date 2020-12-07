import React from 'react'

const withClass = (WrappedComponent, className) => {
    //questo High Order Component fa solo una cosa: 
    //set up di una classe in un div che wrappa un mio componente (props.children)  
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
    //uso lo spread operator ... sulle props
    //così facendo estraggo tutte le proprietà dentro l'oggetto props e le
    //distribuisce come nuove key value pairs sul mio WrappedComponent
};

export default withClass;
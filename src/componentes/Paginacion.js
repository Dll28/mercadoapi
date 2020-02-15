import React from 'react';

const Paginacion= props => {
    return(
    <div className="py-3">
        <button onClick={props.pagAnterior} type="button" className="btn btn-primary mr-1">Anterior &larr;</button>
        <button onClick={props.pagSiguiente}  type="button" className="btn btn-primary">Siguiente &rarr;</button>

    </div>
    )
}

export default Paginacion;

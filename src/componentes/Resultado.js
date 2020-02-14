import React,{Component} from 'react';
import Producto from './Producto';
import Paginacion from './Paginacion';

class Resultado extends Component{
mostrarProductos=() =>{
    const productos=this.props.imagenes;
    if(productos.length=== 0) return null;
    console.log(productos);
    return(
        <React.Fragment>
            <div className="col-12 p-5 row">
                {productos.map(producto => (
                    <Producto 
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>
            <Paginacion
                  pagAnterior={this.props.pagAnterior}
                  pagSiguiente={this.props.pagSiguiente}        
                />
        </React.Fragment>
    )

}
    render(){
        return(
            <React.Fragment>
            {this.mostrarProductos()}
            </React.Fragment>
        );
    }

}

export default Resultado;
import React,{Component} from 'react';

class Buscador extends Component{
    ref= React.createRef();
        buscarProductos=(e) =>{  
            e.preventDefault();         
            const producto = this.ref.current.value;
            this.props.busqueda(producto);
        }
    render(){
        return(
            <form onSubmit={this.buscarProductos}>
                
                <div className="row">
                    <div className="form-group col-md-8">
                    <input ref={ this.ref} type="text" size="50" className="form-control form-control-lg" placeholder="Ingresa el producto que deseas buscar"/>
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                </div>
                </div>
            </form>
        );
    }
}

export default Buscador;
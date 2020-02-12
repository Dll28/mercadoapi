import React from 'react';
import Buscador from './componentes/Buscador'

class App extends Component{

state={
  producto : 'test' 
};

busqueda = (producto) => {
  this.setState({
    producto
  })
}
render(){
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="lead text-center" >Mercado David</h1>
            <Buscador 
              busqueda={this.busqueda}
      />
      </div>
      {this.state.producto}
    </div>
  );
  }
}
export default App;

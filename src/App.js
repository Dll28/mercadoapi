import React, {Component} from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component{

state={
  producto : '',
  imagenes : []
  
}

consultarApi = () => {
  const prod=this.state.producto;
  const url = `https://api.mercadolibre.com/sites/MCO/search?q=${prod}`;
  
  //console.log(url);

  fetch(url).then(respuesta => respuesta.json())
  .then(resultado => this.setState({imagenes : resultado.results}))
}

busqueda = (producto) => {
  this.setState({
    producto
  },() => {
    this.consultarApi();
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
      
      <Resultado 
      imagenes={this.state.imagenes}
      />
      
    </div>
  );
  }
}
export default App;

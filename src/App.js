import React, {Component} from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component{

state={
  producto : '',
  imagenes : [],
  pag: ''
  
}

pagAnterior =() => {
  let pag= this.state.pag;
  if(pag===1)  return null;
  
  pag-=1;
  this.setState({
    pag}, () =>{
      this.consultarApi();
    }
    );
    
}
pagSiguiente = () => {
  let pag= this.state.pag;
  pag+=1;
  this.setState({
    pag} , () =>{
      this.consultarApi();
    }
    );
  

}

consultarApi = () => {
  const prod=this.state.producto;
  const pag=this.state.pag;
  var offset=pag*50;
  const url = `https://api.mercadolibre.com/sites/MCO/search?q=${prod}&offset=${offset}`;
  
  //console.log(url);

  fetch(url).then(respuesta => respuesta.json())
  .then(resultado => this.setState({imagenes : resultado.results}))
}

busqueda = (producto) => {
  this.setState({
    producto : producto,
    pag : 0
  },() => {
    this.consultarApi();
  })
}
render(){
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="lead text-center">Mercado David</h1>
            <Buscador 
              busqueda={this.busqueda}
      />
      </div>
      
      <div className="row justify-content-center">
        <Resultado 
          imagenes={this.state.imagenes}
          pagAnterior={this.pagAnterior}
          pagSiguiente={this.pagSiguiente}
        />
      </div>

    </div>
  );
  }
}
export default App;

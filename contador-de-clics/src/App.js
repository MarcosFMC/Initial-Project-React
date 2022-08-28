import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import React from 'react';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      numClics: 0
    }

    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);

  }

  manejarClic(){
    this.setState(({numClics}) => ({numClics: numClics + 1}));
  }
  reiniciarContador(){
    this.setState(({numClics}) => ({numClics: 0}));
  }


  render(){
    return (
      <div className="App"> 
        <div className='freecodecamp-logo-contenedor'>
          <img className='freecodecamp-logo' 
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
          />
        </div>
        <div className='contenedor-principal'>
          <Contador
          contador={this.state.numClics}
          />
          <Boton
          texto='Clic'
          esBotonClick={true}
          manejarClic={this.manejarClic}
          />
          <Boton
          texto='Reiniciar'
          esBotonClick={false}
          manejarClic={this.reiniciarContador}/>
        </div>
      </div>
    );


  }
}
export default App;

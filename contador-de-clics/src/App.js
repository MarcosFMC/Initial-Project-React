import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () =>{
     setNumClics(numClics + 1);
  };
  const reiniciarContador = () =>{
    setNumClics(0);
  };

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
        contador={numClics}
        />
        <Boton
        texto='Clic'
        esBotonClick={true}
        manejarClic={manejarClick}
        />
        <Boton
        texto='Reiniciar'
        esBotonClick={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;

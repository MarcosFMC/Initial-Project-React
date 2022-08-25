
import './App.css';
import Testimonio from './componentes/Testimonio';
import {data} from './Information.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
        nombre= {data[0].nombre}
        pais={data[0].pais}
        imagen={data[0].imagen}
        cargo={data[0].cargo}
        empresa={data[0].empresa}
        testimonio={data[0].testimonio}
        frase={data[0].frase}
        />

        <Testimonio
         nombre= {data[1].nombre}
         pais={data[1].pais}
         imagen={data[1].imagen}
         cargo={data[1].cargo}
         empresa={data[1].empresa}
         testimonio={data[1].testimonio}
         frase={data[1].frase}
        />

        <Testimonio
          nombre= {data[2].nombre}
          pais={data[2].pais}
          imagen={data[2].imagen}
          cargo={data[2].cargo}
          empresa={data[2].empresa}
          testimonio={data[2].testimonio}
          frase={data[2].frase}
        />
      </div>
    </div>
  );
}

export default App;

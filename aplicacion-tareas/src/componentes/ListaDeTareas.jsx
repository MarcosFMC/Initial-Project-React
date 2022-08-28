import React, {useState} from 'react'
import TareaFormulario from './TareaFormulario'
import Tarea  from './Tarea'

function ListaDeTareas() {

    const[tareas,setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas]
            setTareas(tareasActualizadas);
        };
    }

    const eliminarTarea = texto => {
        const tareasActualizadas = tareas.filter(tarea => tarea.texto !== texto);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {

        const tareasActualizadas = tareas.map(tarea =>{
            if(tarea.texto === id){
                tarea.completada = !tarea.completada; 
            }
            return tarea
        })
        setTareas(tareasActualizadas);
    }

  return (
    <>
        <TareaFormulario onSubmit={agregarTarea}/>
        <div className='tareas-lista-contenedor'>
            {
            tareas.map((tarea) =>
            <Tarea
            key={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
            />
            )}
        </div>
    </>
  )
}

export default ListaDeTareas
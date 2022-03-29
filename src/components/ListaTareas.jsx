import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../styles/ListaTareas.css'

const ListaTareas = () => {

  const [tareas, setTareas] = useState([]);

  return (
    <>
      <TareaFormulario />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) => 
            <Tarea 
              texto={tarea.texto}
              completada={tarea.completada}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaTareas;
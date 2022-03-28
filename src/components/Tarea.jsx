import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../styles/Tarea.css';

const Tarea = ({ texto, completada }) => {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className="tarea-texto">
        {texto}
      </div>
      <div className="tarea-contenedor-iconos">
        <AiOutlineCloseCircle className='tarea-icono'/>
      </div>
    </div>
  );
}

export default Tarea;
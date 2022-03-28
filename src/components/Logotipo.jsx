import React from 'react';
import '../styles/Logotipo.css'

const Logo = (props) => {
  return (
    <div className="luiscarrera-logo-contenedor">
      <img 
        className='luiscarrera-logo' 
        src={props.logotipo} alt="logotipo" 
      />
    </div>
  );
}

export default Logo;
import React from 'react';
import './App.css';
import pokelogo from './img/logoPokemon.png';

function Login() {
  return (
   <div className="centerPokeball back2">
      <div>
        <img src={pokelogo} className="imgPokelogo"/>
      </div>
      <div>

        <div className="squareblack centerPokeball">

          <div className="squarewhite centerPokeball">
            <span className="letra">Nombre de entrenador</span>
            <input className="squaregrey"/>
            <span className="letra">Contraseña</span>
            <input className="squaregrey"/>
            <button className="squareblue ">
              <span className="letra3 ">Iniciar sesión</span>
            </button>
          </div>
        </div>
      </div>

      <div className="centerPokeball">
        <span className="greyletter">¿Olvidaste tu contraseña?</span>
        <div>
          <span className="greyletter">¿No tienes todavía una cuenta?</span>
          <a className="blueletter " href="/">Crear</a>
        </div>
      </div>



   </div>
  );
}

export default Login;
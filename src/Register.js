import React from 'react';
import './App.css';
import pokelogo from './img/logoPokemon.png';

function Register() {
  return (

   <div className="centerPokeball back3">



        <div className="squareblack2 centerPokeball">

          <div className="squarewhite2 centerPokeball">
            <span className="greyletter">Crea tu cuenta del laboratorio del profesor Oak</span>
            <div className="intoball">
              <span className="letra">Nombre de entrenador</span>
              <input className="squaregrey2"/>
            </div>

            <div className="intoball">
              <span className="letra">Contraseña</span>
              <input className="squaregrey2"/>
            </div>

            <div className="intoball">
              <span className="letra">Confirmar contraseña</span>
              <input className="squaregrey2"/>
            </div>

            <div className="intoball">
              <span className="letra">Correo electrónico</span>
              <input className="squaregrey2"/>
            </div>

            <div className="intoball">
              <button className="squareblue2 ">
                <span className="letra3 ">Iniciar sesión</span>
              </button>
              <button className="squareblue2 ">
                <span className="letra3 ">Iniciar sesión</span>
              </button>
            </div>
          </div>
        </div>






   </div>

  );

}

export default Register;
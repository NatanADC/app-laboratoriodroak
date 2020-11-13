import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';

import './App.css';
import img1 from './img/team.png';
import img2 from './img/urpokemon.png';
import img3 from './img/home.png';
import img4 from './img/register.png';
import img5 from './img/logout.png';

function Home (){
  return(
      <div>Home</div>
    )
}

function Team (){
  return(
      <div>Team</div>
    )
}

function UrPokemon (){
  return(
      <div>UrPokemon</div>
    )
}

function Resgister (){
  return(
      <div>
        Resgister
        
      </div>
    )
}

function Logout (){
  return(
      <div>
        Logout
        
      </div>
    )
}

function App() {
  return (
    <Router>
      <React.Fragment>
      <div back1>
        <nav className="back1">
          
          <Link to="/Team" className="button">
            <div className="orderDown" align="center">
              <img src={img1} className="imgNav "/>
              Equipo Pokemon 
            </div>
          </Link>

          <Link to="/UrPokemon" className="button">
            <div className="orderDown ">
              <img src={img2} className="imgNav rotateImg"/>
              Tus Pokemon
            </div>
          </Link>

          <Link to="/home" className="button">
            <div  className="orderDown">
              <img src={img3} className="imgNav "/>
              
            </div>
          </Link>
          <Link to="/Resgister" className="button">
            <div className="orderDown">
              <img src={img4} className="imgNav "/>
              Resgister
            </div>
          </Link>
          <Link to="/Logout" className="button">
            <div className="orderDown">
              <img src={img5} className="imgNav "/>
              Logout
            </div>
          </Link>

        </nav>
        </div>

        <Switch>
          <Route path="/home">
          <Home/>
         </Route>
         <Route path="/Team">
           <Team/>
         </Route>
          <Route path="/UrPokemon">
          <UrPokemon/>
          </Route>
          <Route path="/Resgister">
           <Resgister/>
          </Route>
         <Route path="/Logout">
           <Logout/>
          </Route>
          </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
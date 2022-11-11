import React from "react";
import { Routes, Route} from 'react-router-dom'

//CUSTOM COMPONENT IMPORTS
import { Topbar } from "./components/C-Topbar";

//SASS IMPORTS
import "./styles/scss/style.css";

function App() {
  return (

    <>
    <Topbar/>
    
    <header>
      <h2>Cubog!</h2>
      <p>This area is the App.js component</p>
      <button>A button</button>
    </header>

    <h2>Cards</h2>
    <div className="card">
      <h3 className="card-title">This is a card title</h3>
      <p className="card-body">Lorem, <a href="#">ipsum</a> dolor sit amet consectetur adipisicing elit. Voluptatem incidunt placeat animi aspernatur eum cum ullam, omnis veritatis quas necessitatibus.</p>
    </div>

    <p>Lorem ipsum dolor sit amet.</p>
 
    <hr/>

    <button>Outer Button</button>
    
    {/* ROUTES NEED TO BE LINKED IN ANOTHER PLACE. 
    ENABLE/DISABLE THOSE TOO TO PREVENT ERRORS */}
    
    {/* 
      <Routes> 
          
          WAIT UNTIL YOU NEED ROUTES BEFORE DECOMMENTING THIS
          <Route path="/" element={ <Main/> } />
          <Route path="NPCGenerator" element={ <NpcGenerator/>} />
          <Route path="WildSurges" element={ <WildSurges/>} />
          <Route path="MerchantList" element={ <MerchantGenerator/>} />     
      </Routes>
    */}
    </>
  );
}

export default App;

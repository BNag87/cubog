import React from "react";
import { Routes, Route} from 'react-router-dom'
import "./styles/style.css"

//CUSTOM COMPONENT IMPORTS
import { Topbar } from "./components/C-Topbar";

function App() {
  return (
    <>
    <Topbar/>
      <header>
        <h2>Cubog!</h2>
        <p>This area is the App.js component</p>
        <button>A button</button>
      </header>

    <p>Lorem ipsum dolor sit amet.</p>
    
    <hr/>

    
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

import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Employes from './pages/Employes';
import Equipements from './pages/Equipements';
import Header from './pages/Header';
import Providing from './pages/Providing';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';
import {useState } from 'react';
import { UserContextProvider } from './UserContext'
function App() {
  return (
<div>
  <UserContextProvider>
    <div> 
      <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Employes" element={<Employes />} />
          <Route path="/Equipements" element={<Equipements /> }/>
          <Route path="/Providing" element={<Providing /> }/>
      </Routes>
    </div>
  </UserContextProvider>
</div>
  );
}
export default App;

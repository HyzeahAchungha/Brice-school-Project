import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './component/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/adminlogin"  element={<Login/>}></Route>
        <Route path="/dashboard"  element={<Dashboard/>}></Route>
      </Routes>

      </BrowserRouter>


      
    </div>
  );
}

export default App;

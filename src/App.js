import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import UpdatedData from './components/UpdatedData';

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="updatedata" element={<UpdatedData />} />
      </Routes>
    </div>

  );
}

export default App;

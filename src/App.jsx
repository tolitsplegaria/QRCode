import React from 'react';
/* import ReactDOM from 'react-dom/client'; */
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import QR from './components/QR';

function App (){
  return(
    <Router>
      <Routes>
          <Route path='/' element={<QR />} />
      </Routes>
    </Router>
  )
}

export default App


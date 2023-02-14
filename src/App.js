import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Subscription from './Page/Subscription';
import Homepage from './Page/Homepage';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Homepage/>}/>
        <Route exact path='/home' element={< Homepage/>}/>
        <Route exact path='/subscriptions-list' element={<Subscription/>}/>
      </Routes>
    </Router>
  );
}

export default App;

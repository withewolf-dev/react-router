
import React from 'react'
import './App.css'
import Login from './Login'
import {BrowserRouter as Router,Route} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Login />
       
      </div>
    </Router>
  );
}

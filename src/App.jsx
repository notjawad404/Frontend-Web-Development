import './App.css'

import { Component } from 'react'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import CurrencyConvertor from './Currency-Convertor/Currency';
// import Dashboard from './Dashboard/Dashboard';
import Navbar from './Navbar/Navbar';
import ToDOScreen from './ToDo/TodoScreen';

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Currency-Convertor' element={<CurrencyConvertor/>}/>
          <Route path='/' element={<Navbar/>}/>
          <Route path='/ToDo' element={<ToDOScreen/>} />
        </Routes>
      </Router>
      </>        
    )
  }
}

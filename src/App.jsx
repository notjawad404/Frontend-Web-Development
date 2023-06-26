import './App.css'

import { Component } from 'react'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ToDOScreen from './ToDo/TodoScreen';
import CurrencyScreen from './Currency-Convertor/CurrencyScreen';
import DashboardScreen from './Dashboard/DashboardScreen';

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Routes>
          <Route path='/Currency-Convertor' element={<CurrencyScreen/>}/>
          <Route path='/' element={<DashboardScreen/>}/>
          <Route path='/ToDo' element={<ToDOScreen/>} />
        </Routes>
      </Router>
      </>        
    )
  }
}

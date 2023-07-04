import { Component } from 'react'
import Navbar from './Navbar'
// import Dashboard from './Dashboard'
import DataPage from './pages/Data'

export default class Home extends Component {
  render() {
    return (
      <div className='flex'>
      <div className='w-1/4'>
      <Navbar/>

      </div>
<div className='w-3/4'>
{/* <Dashboard/> */}
<DataPage/>

</div>
      </div>
    )
  }
}

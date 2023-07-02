import { Component } from 'react'
import Navbar from './Navbar'

export default class Dashboard extends Component {
  render() {
    return (
<div className='flex'>
<div className='w-1/4 h-full'>
<Navbar/>
</div>
<div className='w-3/4 h-screen overflow-y-auto'>
      <div className='flex w-full h-auto justify-center items-center mt-5 mb-40'>
        <p className='w-56 bg-sky-700 text-white px-14 text-2xl font-bold rounded-full'>Dashboard</p>
      </div>
      <div  className='grid grid-cols-3 gap-5 mx-10 my-12'>
        <div className='col-span-1 flex px-4 py-4 bg-sky-700 rounded-full'>
          <p className='font-bold text-2xl w-1/2 mx-3'>Total Categories</p>
          <p className='w-1/2 ml-5 text-2xl text-yellow-300'>999999</p>
        </div>
        <div className='col-span-1 flex px-4 py-4 bg-sky-700 rounded-full'>
          <p className='font-bold text-2xl w-1/2 mx-3'>Total Record</p>
          <p className='w-1/2 ml-5 text-2xl text-yellow-300'>999999</p>
        </div>
        <div className='col-span-1 flex px-4 py-4 bg-sky-700 rounded-full'>
          <p className='font-bold text-2xl w-1/2 mx-3'>In Progress</p>
          <p className='w-1/2 ml-5 text-2xl text-yellow-300'>999999</p>
        </div>
      </div>
      <div className='w-11/12 mx-10 bg-sky-700 text-yellow-300 px-5 py-6 text-2xl rounded-3xl'>
        <p>C1</p>
        <p>C2</p>
        <p>C3</p>
        <p>C4</p>
      </div>
</div>
</div>
    )
  }
}

import { Component } from 'react'
import "../App.css"
import man from '../assets/man.jpg'
import girl from '../assets/girl.jpg'

import profile from '../assets/profile.jpg'
import image from '../assets/image.jpg'

import graph from '../assets/graph.png'



export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <nav className="flex-1">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <p>Your Profile {'>'} <span className="text-red-400">Dashboard</span></p>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-96 flex items-baseline space-x-4">
                                        <a href="#" className=""><img src={profile} alt="profile" className="w-10 rounded-full px-3 py-2" /></a>|
                                        <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">John Price</a>|
                                        <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Notifications</a>|
                                        <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Settings</a>|
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                    <div className="flex justify-between mt-10 mx-8">
                        <h1 className="text-left"><span className='text-bold text-2xl'>Hi John</span> Your analytics are all set</h1>
                        <div className="space-x-2 bg-slate-300">
                            <button className="hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm">
                                Button 1
                            </button>
                            <button className="hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm">
                                Button 2
                            </button>
                            <button className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm">
                                Button 3
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex mt-10">
                    <div className="w-1/2 mx-20">
                        <div className="flex">
                            <div className="w-1/2 bg-slate-200 mx-5">
                                <h1>Current Scenerio</h1>
                                <h1 className='text-orange-500 text-3xl font-bold'>23 %</h1>
                                <div className="w-100 bg-white rounded mx-5 my-3">
                                    <div className="h-3 bg-red-500 rounded w-4"></div>
                                </div>
                                <p className='text-sm'>These are your stats</p>

                            </div>
                            <div className="w-1/2"><img className='h-full object-cover' src={image} alt='Image' /></div>
                        </div>

                    </div>
                    <div className="w-1/2 bg-red-500 mx-20 text-white">
                        <div className='flex'>
                            <div className=' w-1/2 mx-5 pt-1'>
                                <h1>Payment index</h1>
                                <h1 className='text-3xl font-bold'>2345.53$</h1>
                                <p className='text-sm'>This is payment index</p>
                            </div>
                            <div className="w-1/2"><img className='h-full object-cover' src={image} alt='Image' /></div>
                        </div>
                    </div>
                </div>
                <div className="w-50 my-14 mx-20 bg-slate-300">
                    <div className="flex justify-between my-2">
                        <span>14.2%</span>
                        <span>12.1%</span>
                        <span>23.7%</span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="h-4 bg-gray-200 mx-2">
                        <div className="h-full bg-blue-500 w-96" ></div>
                    </div>
                    <div className="flex justify-between my-2">
                        <span>First Quater</span>
                        <span>Second Quater</span>
                        <span>Third Quater</span>
                        <span>Fourth Quater</span>
                        <span>Fifth Quater</span>
                    </div>
                </div>

                <div>
                    <div className="flex mx-20">
                        <div className="w-1/4 bg-gray-200 mx-5 flex justify-center items-center">
                            <div>
                                <img className='"w-10 rounded-full px-3 py-2' src={girl} alt='girl' />
                                <h1 className='text-center'>Ana De Armas</h1>
                                <h1 className='text-center'>Analyts</h1>
                                <div className=" bg-slate-300">
                                    <button className="hover:bg-red-700 text-white mx-1 text-sm">
                                        Button 1
                                    </button>
                                    <button className="hover:bg-red-700 text-white mx-3 text-sm">
                                        Button 2
                                    </button>
                                    <button className="bg-red-700 hover:bg-red-700 mx-1 text-white text-sm">
                                        Button 3
                                    </button>
                                </div>
                                <button className='mx-20 bg-red-500 rounded my-5'>Profile</button>
                            </div>

                        </div>
                        <div className="w-1/4 bg-gray-200 mx-5 flex justify-center items-center">
                        <div>
                                <img className='"w-10 rounded-full px-3 py-2' src={man} alt='man' />
                                <h1 className='text-center'>Ryan Reynolds</h1>
                                <h1 className='text-center'>Analyts</h1>
                                <div className=" bg-slate-300">
                                    <button className="hover:bg-red-700 text-white mx-1 text-sm">
                                        Button 1
                                    </button>
                                    <button className="hover:bg-red-700 text-white mx-3 text-sm">
                                        Button 2
                                    </button>
                                    <button className="bg-red-700 hover:bg-red-700 mx-1 text-white text-sm">
                                        Button 3
                                    </button>
                                </div>
                                <button className='mx-20 bg-red-500 rounded my-5'>Profile</button>
                            </div>


                        </div>
                        <div className="w-1/2  mx-5">
                            <img src={graph}  alt='graph'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

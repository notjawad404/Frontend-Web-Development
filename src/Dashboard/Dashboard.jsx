import { Component } from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpg';
import image from '../assets/image.jpg';
import graph from '../assets/graph.png';
import man from '../assets/man.jpg';
import girl from '../assets/girl.jpg';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="w-3/4">
                <div className="grid grid-cols-2 gap-4 bg-gray-800 text-white">
                    <div className="col-span-1 p-4">
                        <p>
                            Your Profile <span className="text-lg">&gt;</span> <span className='text-red-400 font-semibold text-lg'>Dashboard</span>
                        </p>
                    </div>
                    <div className="col-span-1 p-4 flex justify-end">
                        <img src={profile} alt="Profile Image" className="ml-48 w-10 h-8 rounded" />
                        <Link className="px-2 mx-2 hover:text-cyan-400" to="/">
                            John
                        </Link>
                        |
                        <Link className="px-2 hover:text-cyan-400" to="/">
                            Settings
                        </Link>
                        |
                        <Link className="px-2 hover:text-cyan-400" to="/">
                            Notifications
                        </Link>
                    </div>
                </div>

                <div className="mt-10 mx-14">
                    <div className="flex justify-between">
                        <h1 className="text-left">
                            <span className="font-bold text-2xl">Hi John</span> Your analytics are all set
                        </h1>
                        <div className="space-x-2">
                            <button className="bg-red-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-sm">
                                Button 1
                            </button>
                            <button className="bg-red-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-sm">
                                Button 2
                            </button>
                            <button className="bg-red-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-sm">
                                Button 3
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-10 mx-14">
                    <div className="col-span-1 h-full w-full mr-2">
                        <div className="flex h-full">
                            <div className="w-full bg-slate-200 px-5 py-5">
                                <h1>Current Scenario</h1>
                                <h1 className="text-orange-500 text-3xl font-bold">23%</h1>
                                <div className="w-1/2 bg-white rounded mt-3">
                                    <div className="h-3 bg-red-500 rounded w-12"></div>
                                </div>
                                <p className="text-sm">These are your stats</p>
                            </div>
                            <div className="w-1/2">
                                <img className="h-40 object-cover" src={image} alt="Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-red-500 text-white h-full w-full ml-2">
                        <div className="flex h-full">
                            <div className="w-full px-5 py-5">
                                <h1>Payment index</h1>
                                <h1 className="text-3xl font-bold">$2345.53</h1>
                                <p className="text-sm">This is the payment index</p>
                            </div>
                            <div className="w-1/2">
                                <img className="h-40 object-cover" src={image} alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-50 my-14 px-6 mx-14 bg-slate-300">
                    <div className="flex justify-between my-2">
                        <span>14.2%</span>
                        <span>12.1%</span>
                        <span>23.7%</span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="h-4 bg-gray-200">
                        <div className="h-full bg-blue-500 w-96"></div>
                    </div>
                    <div className="flex justify-between my-2 px-2">
                        <span>First Quarter</span>
                        <span>Second Quarter</span>
                        <span>Third Quarter</span>
                        <span>Fourth Quarter</span>
                        <span>Fifth Quarter</span>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-8 mx-14 mb-4">
                    <div className="col-span-1 bg-gray-200 flex flex-col items-center py-2 rounded-lg">
                        <img className="w-20 h-20 rounded-full px-3 py-2" src={girl} alt="girl" />
                        <h1 className="text-center mt-2">Ana De Armas</h1>
                        <h1 className="text-center text-sm">Analyst</h1>
                        <div className="flex justify-center mt-4">
                            <button className="bg-red-700 hover:bg-blue-400 text-white mx-1 text-xs px-2 py-1 rounded-lg">Analyst</button>
                            <button className="bg-red-700 hover:bg-blue-400 text-white mx-1 text-xs px-2 py-1 rounded-lg">Ops</button>
                            <button className="bg-red-700 hover:bg-blue-400 text-white mx-1 text-xs px-2 py-1 rounded-lg">Expert</button>
                        </div>
                        <button className="bg-blue-500 hover:bg-red-700 text-white mt-5 py-2 px-4 rounded-lg">Profile</button>
                    </div>
                    <div className="col-span-1 bg-gray-200 flex flex-col items-center py-2 rounded-lg">
                        <img className="w-20 h-20 rounded-full px-3 py-2" src={man} alt="man" />
                        <h1 className="text-center mt-2">Ryan Reynolds</h1>
                        <h1 className="text-center text-sm">Data Scientist</h1>
                        <div className="flex justify-center mt-4">
                            <button className="bg-red-700 hover:bg-blue-400 text-white mx-1 text-xs px-2 py-1 rounded-lg">AI/ML</button>
                            <button className="bg-red-700 hover:bg-blue-400 text-white mx-1 text-xs px-2 py-1 rounded-lg">Statist</button>
                            <button className="bg-red-700 hover:bg-blue-400 text-white mx-1 text-xs px-2 py-1 rounded-lg">Analyst</button>
                            
                        </div>
                        <button className="bg-blue-500 hover:bg-red-700 text-white mt-5 py-2 px-4 rounded-lg">Profile</button>
             

                    </div>
                    <div className="col-span-2 bg-gray-200 flex flex-col items-center">
                        <img className="w-full h-54 px-3 py-2" src={graph} alt="graph" />
                        <h1 className="text-center mt-2">Graph</h1>
                    </div>
                </div>


            </div>
        );
    }
}

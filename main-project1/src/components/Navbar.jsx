import { Component } from 'react'
import logo from '../assets/logo.png'
import '../App.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="flex flex-col h-screen nav-bg text-white">
                    <div className="p-4">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-16 h-16 mx-auto"
                        />
                    </div>
                    <div className="flex flex-col flex-grow justify-center items-center">
                        <a
                            href="#"
                            className="py-2 px-4 font-bold text-2xl text-white hover:text-yellow-400"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#"
                            className="py-2 px-4 font-bold text-2xl text-white hover:text-yellow-400"
                        >
                            Manage Files
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

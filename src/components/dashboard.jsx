import { Component } from 'react'
import "../App.css"

import profile from '../assets/profile.jpg'



export default class Dashboard extends Component {
  render() {
    return (
      <div>
            <nav className= "flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <p>Your Profile {'>'} <span className="text-red-400">Dashboard</span></p>
              </div>
              <div className="hidden md:block">
                <div className="ml-96 flex items-baseline space-x-4">
                  <a href="#" className=""><img src={profile} alt="profile" className="w-10 rounded-full px-3 py-2"/></a>|
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
            
        </div>
      </div>
    )
  }
}

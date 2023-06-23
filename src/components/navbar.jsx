import "../App.css"
import logo from '../assets/logo.png'

import Dashboard from "./dashboard"

const Navbar = () => {
  return (
    <div className="flex">
      <nav className="bg-gray-800 w-1/6 h-auto">
        <div className="max-w-xs mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mt-8">
            <div>
              <span className=""><img src={logo}  alt="logo"/></span>
            </div>
          </div>
          <div className="mt-10">
            <nav className="space-y-1">
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-1 py-5 rounded-md text-lg font-medium">Profile</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-10 py-2 rounded-md text-sm font-medium">Reports</a>
                <a href="#" className="text-gray-300 bg-red-500   px-10 py-2 rounded-md text-sm font-medium">Dashboard</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-10 py-2 rounded-md text-sm font-medium">Payment</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-10 py-2 rounded-md text-sm font-medium">Admin</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-10 py-2 rounded-md text-sm font-medium">Records</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-10 py-2 rounded-md text-sm font-medium">CRM-Data</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-1 py-5 rounded-md text-lg font-medium">Help</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-10 py-2 rounded-md text-sm font-medium">Contact</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-10 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-10 py-2 rounded-md text-sm font-medium">Report</a>
            </nav>
          </div>
        </div>
      </nav>


      <Dashboard/>

    </div>
  );
}

export default Navbar;

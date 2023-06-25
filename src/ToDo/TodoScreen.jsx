import "../App.css";
import logo from '../assets/logo.png';

import { Link  } from 'react-router-dom';
import TodoList from "./ToDo";

const ToDOScreen = () => {
  const navLinks = [
    { text: "Profile", to: "/" },
    { text: "Currency Convertor", to: "/Currency-Convertor" },
    { text: "ToDo-App", to: "/ToDo" },
    { text: "Dashboard", to: "/" },
    { text: "Admin", to: "/" },
    { text: "Records", to: "/" },
    { text: "CRM Data", to: "/" },
    { text: "Help", to: "/" },
    { text: "Contact", to: "/" },
    { text: "About", to: "/" },
    { text: "Report", to: "/" }
  ];

  return (
    <div className="flex">
      <nav className="bg-gray-800 w-1/4 h-auto">
        <div className="max-w-xs mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mt-4">
            <div>
              <span className=""><img src={logo} alt="logo" /></span>
            </div>
          </div>
          <div className="mt-4">
            <nav className="space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-10 py-2 rounded-md text-sm font-medium"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </nav>
      <TodoList/>
    </div>
  );
};

export default ToDOScreen;

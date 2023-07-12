import { Link} from 'react-router-dom';
import '../App.css'

import profile from '../assets/profile.jpg';
import Chat1 from './Chat1';
import '../App.css'

const Chat = () => {

  return (
     <div className='w-3/4 h-screen overflow-y-auto chat-bg1'>
    <div className="grid grid-cols-2 gap-4 bg-gray-800 text-white">
               <div className="col-span-1 p-4">
                 <p>
                   <Link to='/'>Your Profile</Link> <span className="text-lg">&gt;</span> <span className='text-red-400 font-semibold text-lg'>Chat App</span>
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
    <Chat1/>
    </div>
  );
};

export default Chat;


import { useState } from 'react';
import Data from './pages/data';
import DataPage from './pages/DataPage';

const Page = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (file) => {
    const currentDate = new Date().toLocaleDateString();
    const newFile = {
      name: file.name,
      date: currentDate,
      status: 'In Progress', // You can set 'Completed' based on your logic
    };

    setFiles((prevFiles) => [...prevFiles, newFile]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-2xl mb-4">File Upload App</h1>
      <Data onFileUpload={handleFileUpload} />
      <DataPage files={files} />
    </div>
  );
};

export default Page;

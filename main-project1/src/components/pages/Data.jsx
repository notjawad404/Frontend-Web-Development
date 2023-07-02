import { useState } from 'react';

const Data = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    // Perform necessary actions with the selected file
    // For simplicity, let's just log the file details
    console.log('Selected File:', selectedFile);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium">Select a File:</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <button
          onClick={handleFileUpload}
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded"
        >
          Add File
        </button>
      </div>
    </div>
  );
};

export default Data;



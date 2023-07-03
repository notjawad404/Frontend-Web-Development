import { useState } from 'react';

const FormFields = ({ handleFormSubmit }) => {
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [files, setFiles] = useState([]);

  const handleSupplierChange = (e) => {
    setSelectedSupplier(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleFileInputChange = (e) => {
    const fileList = e.target.files;
    const filesArray = Array.from(fileList);
    setFiles(filesArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(selectedSupplier, selectedCategory, files);
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      {/* Input fields */}
      <select
        name="supplier"
        value={selectedSupplier}
        onChange={handleSupplierChange}
        className="border border-gray-300 rounded px-4 py-2 mb-4"
      >
        <option value="">Select Supplier</option>
        {/* Supplier options */}
      </select>
      <select
        name="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="border border-gray-300 rounded px-4 py-2 mb-4"
      >
        <option value="">Select Category</option>
        {/* Category options */}
      </select>
      <input
        type="file"
        name="files"
        onChange={handleFileInputChange}
        className="border border-gray-300 rounded px-4 py-2 mb-4"
        multiple
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default FormFields;

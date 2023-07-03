import { useState } from 'react';

const MyForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const [date, setDate] = useState('');
  const [suppliers, setSuppliers] = useState(['Supplier A', 'Supplier B', 'Supplier C']);
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [categories, setCategories] = useState(['Category A', 'Category B', 'Category C']);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [files, setFiles] = useState([]);
  const [formSubmissions, setFormSubmissions] = useState([]);

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
    const currentDate = new Date().toLocaleDateString(); // Get current date only
    setDate(currentDate);

    // Create the JavaScript object
    const formData = {
      supplier: selectedSupplier,
      category: selectedCategory,
      date: currentDate,
      files,
    };

    setFormSubmissions((prevSubmissions) => [formData, ...prevSubmissions]); // Add new data at the beginning
    console.log(formData);
  };

  // Pagination functions
  const indexOfLastEntry = currentPage * perPage;
  const indexOfFirstEntry = indexOfLastEntry - perPage;
  const currentEntries = formSubmissions.slice(indexOfFirstEntry, indexOfLastEntry).reverse(); // Reverse the array

  const totalPages = Math.ceil(formSubmissions.length / perPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Form</h2>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex mb-4">
          <select
            name="supplier"
            value={selectedSupplier}
            onChange={handleSupplierChange}
            className="border border-gray-300 rounded px-4 py-2 mr-2"
          >
            <option value="">Select Supplier</option>
            {suppliers.map((supplier) => (
              <option key={supplier} value={supplier}>
                {supplier}
              </option>
            ))}
          </select>
          <select
            name="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded px-4 py-2 mr-2"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="file"
            name="files"
            onChange={handleFileInputChange}
            className="border border-gray-300 rounded px-4 py-2 mr-2"
            multiple
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
      <h2 className="text-2xl font-bold mt-8">Form Submissions</h2>
      <div className="flex justify-between w-fit bg-gray-200 px-4 py-2 font-semibold">
        <p className="w-1/4 px-14 mx-2">Supplier</p>
        <p className="w-1/4 px-14 mx-2">Category</p>
        <p className="w-1/4 px-14 mx-2">Date</p>
        <p className="w-1/4 px-14 mx-2">Files</p>
      </div>
      <ul className="mt-2">
        {currentEntries.map((submission, index) => (
          <li key={index} className="flex justify-between w-fit bg-gray-100 px-4 py-2 overflow-y-auto">
            <p className="w-1/4 px-14 font-semibold">{submission.supplier}</p>
            <p className="w-1/4 font-semibold">{submission.category}</p>
            <p className="w-1/4 font-semibold">{submission.date}</p>
            <p className="w-1/4 font-semibold">
              {submission.files.length > 0 ? (
                <ul className="list-disc pl-4">
                  {submission.files.map((file, fileIndex) => (
                    <li key={fileIndex}>{file.name}</li>
                  ))}
                </ul>
              ) : (
                <span>No files selected</span>
              )}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-4">
        <button
          className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyForm;

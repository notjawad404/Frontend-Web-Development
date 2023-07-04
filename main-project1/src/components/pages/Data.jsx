import { useState } from 'react';
import '../../App.css'

const DataPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const setDate = useState('');
  const suppliers= ['Supplier A', 'Supplier B', 'Supplier C'];
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const categories =['Category A', 'Category B', 'Category C'];
  const [selectedCategory, setSelectedCategory] = useState('');
  const [files, setFiles] = useState([]);
  const [formSubmissions, setFormSubmissions] = useState([]);
  const [searchSupplier, setSearchSupplier] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchFile, setSearchFile] = useState('');

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

  const handleSupplierSearch = (e) => {
    setSearchSupplier(e.target.value);
  };

  const handleCategorySearch = (e) => {
    setSearchCategory(e.target.value);
  };

  const handleDateSearch = (e) => {
    setSearchDate(e.target.value);
  };

  const handleFileSearch = (e) => {
    setSearchFile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString();
    setDate(currentDate);

    const formData = {
      supplier: selectedSupplier,
      category: selectedCategory,
      date: currentDate,
      files,
    };

    setFormSubmissions((prevSubmissions) => [formData, ...prevSubmissions]);
    console.log(formData);

    setSelectedSupplier('');
    setSelectedCategory('');
    setFiles([]);
    setSearchSupplier('');
    setSearchCategory('');
    setSearchDate('');
    setSearchFile('');
  };

  const indexOfLastEntry = currentPage * perPage;
  const indexOfFirstEntry = indexOfLastEntry - perPage;

  const filteredEntries = formSubmissions.filter((submission) => {
    const supplierMatch = submission.supplier.toLowerCase().includes(searchSupplier.toLowerCase());
    const categoryMatch = submission.category.toLowerCase().includes(searchCategory.toLowerCase());
    const dateMatch = submission.date.includes(searchDate);
    const fileMatch = submission.files.some((file) =>
      file.name.toLowerCase().includes(searchFile.toLowerCase())
    );

    return supplierMatch && categoryMatch && dateMatch && fileMatch;
  });

  const currentEntries = filteredEntries
    .slice(indexOfFirstEntry, indexOfLastEntry)
    .reverse();

  const totalPages = Math.ceil(filteredEntries.length / perPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex flex-col items-center h-screen overflow-y-auto bg-form">
    <div className='w-56 h-fit text-center rounded-xl bg-sky-500 my-4 py-3'>
    <h2 className="text-2xl font-bold mb-4">Form Submission</h2>
    </div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex mb-4">
          <select
            name="supplier"
            value={selectedSupplier}
            onChange={handleSupplierChange}
            className="border border-gray-300 rounded-xl px-6 mr-4 py-2"
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
            className="border border-gray-300 rounded-xl px-6 mr-8 py-2"
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
            className="border border-gray-300 bg-gray-300 rounded-xl ml-14 mr-4 px-2 py-2"
            multiple
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex justify-between my-5">
        <input
          type="text"
          name="searchSupplier"
          value={searchSupplier}
          onChange={handleSupplierSearch}
          placeholder="Filter Supplier"
          className="border border-gray-300 rounded-xl px-3 py-2 mr-2"
        />
        <input
          type="text"
          name="searchCategory"
          value={searchCategory}
          onChange={handleCategorySearch}
          placeholder="Filter Category"
          className="border border-gray-300 rounded-xl px-3 py-2 mr-3"
        />
        <input
          type="text"
          name="searchDate"
          value={searchDate}
          onChange={handleDateSearch}
          placeholder="Filter Date"
          className="border border-gray-300 rounded-xl px-2 py-2 mr-3"
        />
        <input
          type="text"
          name="searchFile"
          value={searchFile}
          onChange={handleFileSearch}
          placeholder="Search File"
          className="border border-gray-300 rounded-xl px-2 py-2 mr-2"
        />
      </div>
      <div className='bg1 rounded-xl py-4 px-4'>
        <div className="flex justify-between w-fit bg-lime-200 px-14 py-2 font-semibold">
          <p className="w-1/4 px-16">Supplier</p>
          <p className="w-1/4 px-16">Category</p>
          <p className="w-1/4 px-16">Date</p>
          <p className="w-1/4 px-16">Files</p>
        </div>
        <ul className="mt-2">
          {currentEntries.map((submission, index) => (
            <li key={index} className="flex justify-between w-fit bg-lime-100 px-4 py-2 overflow-y-auto">
              <p className="w-1/4 px-14 font-semibold">{submission.supplier}</p>
              <p className="w-1/4 px-14 font-semibold">{submission.category}</p>
              <p className="w-1/4 px-14 font-semibold">{submission.date}</p>
              <p className="w-1/4 px-14 font-semibold">
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
            className="mr-2 bg-yellow-300 hover:bg-red-700 hover:text-white font-bold py-2 px-4 rounded"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="ml-2 bg-yellow-300 hover:bg-red-700 hover:text-white font-bold py-2 px-4 rounded"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataPage;

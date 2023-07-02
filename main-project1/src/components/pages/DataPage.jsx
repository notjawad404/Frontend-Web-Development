import { useState } from 'react';
import PropTypes from 'prop-types';

const DataPage = ({ files }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(files.length / itemsPerPage);

  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderFiles = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentFiles = files.slice(startIndex, endIndex);

    return currentFiles.map((file, index) => (
      <div key={index} className="border p-4">
        <div>
          <strong>File:</strong> {file.name}
        </div>
        <div>
          <strong>Date:</strong> {file.date}
        </div>
        <div>
          <strong>Status:</strong> {file.status}
        </div>
      </div>
    ));
  };

  const renderPagination = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handleClickPage(i)}
          className={`mr-2 py-2 px-4 rounded ${
            currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Data Page</h2>
      <div className="space-y-4">{renderFiles()}</div>
      <div className="mt-4">{renderPagination()}</div>
    </div>
  );
};

DataPage.propTypes = {
    files: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default DataPage;
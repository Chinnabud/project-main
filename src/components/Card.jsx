import React, { useState } from 'react';

const Card = ({ name, country, price, img }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSelectCar = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    return (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl m-4 max-w-sm overflow-hidden">
        <img
          src={`./Image/${img}`}
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600 mt-2">
            <strong>Country:</strong> {country}
          </p>
          <p className="text-gray-600 mt-1">
            <strong>Price Range:</strong> {price}
          </p>
          <button
            onClick={handleSelectCar}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            เลือกรถ
          </button>
        </div>
  
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h2>
              <img
                src={`./Image/${img}`}
                alt={name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <p className="text-gray-600">
                <strong>Country:</strong> {country}
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Price Range:</strong> {price}
              </p>
              <button
                onClick={handleCloseModal}
                className="mt-4 px-4 me-3 py-2 bg-lime-500 text-white rounded-md hover:bg-red-600"
              >
                จองรถ
              </button>

              <button
                onClick={handleCloseModal}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                ปิด
              </button>
            </div>
          </div>
        )}
      </div>
    )
}

export default Card

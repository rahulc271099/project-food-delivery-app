import React from 'react';
import { FaTimes } from 'react-icons/fa';

function ModalLayout({children,heading,onClose}) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className='flex justify-center relative'>
      <h2 className="text-2xl text-center font-bold mb-4">{heading}</h2>
      <button
              type="button"
              className="absolute right-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={onClose}
            >
              <FaTimes/>
            </button>
      </div>
        {children}
        </div>
      </div>
  )
};

export default ModalLayout;

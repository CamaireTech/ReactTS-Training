import React from 'react';
import Button from './Button';

interface PopInProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const PopIn: React.FC<PopInProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="relative w-1/2 bg-white rounded-lg p-8 shadow-lg">
        <Button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-300"
          >
            X
        </Button>
        {children}
      </div>
    </div>
  );
};

export default PopIn;

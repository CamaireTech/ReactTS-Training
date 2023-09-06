import React from 'react';

interface DatePickerFieldProps {
  lunchDate: string;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ lunchDate }) => {

  return (
    <div className="relative">
      <input
        type="date"
        className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        placeholder="Select a date"
        value={lunchDate}
      />
      <svg
        className="absolute top-3 right-3 w-6 h-6 text-gray-400 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 3.293a1 1 0 011.414 0L10 4.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M10 18a1 1 0 01-1-1V7a1 1 0 112 0v10a1 1 0 01-1 1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default DatePickerField;

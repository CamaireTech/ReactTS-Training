import React from 'react';
import Button from '../Components/Button';
import usePopInLogic from '../../Core/usePopInLogic';
import PopIn from '../Components/PopIn';
import { useFormValidation } from '../../Core/useFormValidation';

const AddMissionForm: React.FC = () => {
  const { isPopInOpen, openPopIn, closePopIn } = usePopInLogic();
  const {
    values,
    errors,
    updateFormField,
    validateAndAddCrewMember,
    removeCrewMember,
    crewBuffer,
    nameInputRef,
    launchDateInputRef,
    crewInputRef,
    descriptionInputRef,
    handleSubmit,
  } = useFormValidation(closePopIn);

  return (
    <>
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        onClick={openPopIn}
      >
        Ajouter une mission
      </Button>
      {isPopInOpen && (
        <PopIn isOpen={isPopInOpen} onClose={closePopIn}>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={(e) => updateFormField('name', e.target.value)}
                ref={nameInputRef}
                className={`w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-500 ${
                  errors.name ? 'border-red-500' : ''
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="launchDate" className="block font-medium">
                Launch Date:
              </label>
              <input
                type="date"
                id="launchDate"
                name="launchDate"
                value={values.launchDate}
                onChange={(e) => updateFormField('launchDate', e.target.value)}
                ref={launchDateInputRef}
                className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              />
              {errors.launchDate && (
                <p className="text-red-500 text-sm">{errors.launchDate}</p>
              )}
            </div>

            <div className="flex">
              <input
                type="text"
                id="crew"
                name="crew"
                value={values.crew}
                onChange={(e) => updateFormField('crew', e.target.value)}
                ref={crewInputRef}
                className={`w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 ${
                  errors.crew ? 'border-red-500' : ''
                }`}
              />
              <button
                type="button"
                onClick={validateAndAddCrewMember}
                className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Add Crew Member
              </button>
            </div>
            {errors.crew && <p className="text-red-500 text-sm">{errors.crew}</p>}
            <ul className="mt-2">
              {crewBuffer.map((crewMember, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">{crewMember}</span>
                  <button
                    type="button"
                    onClick={() => removeCrewMember(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Description:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={values.description}
                onChange={(e) => updateFormField('description', e.target.value)}
                ref={descriptionInputRef}
                className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring"
              >
                Add Mission
              </button>
            </div>
          </form>
        </PopIn>
      )}
    </>
  );
};

export default AddMissionForm;

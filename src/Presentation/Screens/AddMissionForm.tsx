import React, { useState } from 'react';
import { Mission } from '../../Entities/Mission';
import Button from '../Components/Button';
import useMissionManagement from '../../Logic/useMissionManagement';
import usePopInLogic from '../../Logic/usePopInLogic';
import PopIn from '../Components/PopIn';
import { useMissionContext } from '../../Logic/Contexte/MissionContext';

const AddMissionForm: React.FC = () => {
  const { addMission } = useMissionContext();
  const { isPopInOpen, openPopIn, closePopIn } = usePopInLogic(); 
  const [values, setValues] = useState({
    name: '',
    lunchDate: '',
    crew: '',
    description: '',
  });

  const [crewMember, setCrewMember] = useState<string>(''); // State to manage the currently entered crew member
  const [crewBuffer, setCrewBuffer] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Create a new mission object from the form values
    const newMission: Mission = {
      id: '', // You need to generate a unique ID, e.g., using uuidv4()
      name: values.name,
      launchDate: values.lunchDate,
      crew: crewBuffer,
      description: values.description,
      state: 1, // Set the initial state (e.g., 1 for not deleted)
      createdAt: new Date().toISOString(), // Set the creation timestamp
      updatedAt: new Date().toISOString(),
    };

    // Call the createMission function to add the new mission
    addMission(newMission);

    setValues({ name: '', lunchDate: '', crew: '', description: '' });
    setCrewBuffer([]);

    closePopIn();
  };

  const handleAddCrewMember = () => {
    if (crewMember.trim() !== '') {
      setCrewBuffer([...crewBuffer, crewMember]);
      setCrewMember(''); // Clear the crew member input
    }
  };

  return (
    <>
      <Button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        onClick={openPopIn}
        >Ajouter une mission
      </Button>
      {isPopInOpen && (
        <PopIn isOpen={isPopInOpen} onClose={closePopIn}>
          <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            {/* Launch Date */}
            <div className="mb-4">
              <label className="block font-medium">Launch Date:</label>
              <input
                type="date"
                id="lunchDate"
                name="lunchDate"
                value={values.lunchDate}
                onChange={(e) => setValues({ ...values, lunchDate: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            {/* Crew */}
            <div className="mb-4">
              <label className="block font-medium">Crew:</label>
              <div className="flex">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg py-2 px-3"
                  value={crewMember}
                  onChange={(e) => setCrewMember(e.target.value)}
                />
                <button
                  onClick={handleAddCrewMember}
                  className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  type="button"
                >
                  Add Crew
                </button>
              </div>
              {/* Display crew members */}
              {crewBuffer.length > 0 && (
                <div className="mt-2">
                  <strong>Crew Buffer:</strong> {crewBuffer.join(', ')}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={values.description}
                onChange={(e) => setValues({ ...values, description: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring"
              >
                Add Mission
              </button>
            </div>
          </form>
          </div>
        </PopIn>
      )}
    </>
  );
};

export default AddMissionForm;

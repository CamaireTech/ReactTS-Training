import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMission } from '../redux/missions/missionSlice';
import DatePickerField from '../utiles/DatePickerField';

const AddMissionForm: React.FC = () => {
  const dispatch = useDispatch();

  const [isPopInOpen, setIsPopInOpen] = useState(false); // Manage pop-in state
  const [name, setName] = useState('');
  const [launchDate, setLaunchDate] = useState<Date | null>(null);
  const [crew, setCrew] = useState<string[]>([]);
  const [description, setDescription] = useState('');

  const openPopIn = () => {
    setIsPopInOpen(true);
  };

  const closePopIn = () => {
    setIsPopInOpen(false);
  };

  const handleAddMission = (event: React.FormEvent) => {
    event.preventDefault();

    const formattedLaunchDate = launchDate ? launchDate.toISOString().substring(0, 10) : '';

    const newMission = {
      id: Date.now(),
      name,
      launchDate: formattedLaunchDate, 
      crew,
      description,
    };
    dispatch(addMission(newMission));
    setName('');
    setLaunchDate(null);
    setCrew([]);
    setDescription('');
    closePopIn();
  };

  return (
    <div className="container mx-auto">
      {/* <h2 className="text-xl font-semibold mb-4">Ajouter une Mission</h2> */}
      <button
        onClick={openPopIn}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Ajouter une mission
      </button>

      {isPopInOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white w-1/2 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Nouvelle Mission</h2>
            <form onSubmit={handleAddMission}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Nom de la mission:
                    </label>
                    <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="launchDate">
                    Date de lancement:
                    </label>
                    <DatePickerField selected={launchDate} onChange={(date) => setLaunchDate(date as Date)} />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="crew">
                    Équipage (séparé par des virgules):
                    </label>
                    <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="crew"
                    value={crew.join(',')}
                    onChange={(e) => setCrew(e.target.value.split(','))}
                    required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description:
                    </label>
                    <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    />
                </div>

                <div className="flex justify-end mt-4">
                    <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2"
                    >
                    Ajouter
                    </button>
                    <button
                    type="button"
                    onClick={closePopIn}
                    className="text-gray-600 hover:text-gray-800 font-semibold py-2 px-4 rounded"
                    >
                    Annuler
                    </button>
                </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMissionForm;

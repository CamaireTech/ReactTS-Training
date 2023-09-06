import { useState, useRef } from 'react';
import { Mission } from '../Entities/Mission';
import { useMissionContext } from '../Core/Contexte/MissionContext';

interface FormErrors {
  name: string | null;
  launchDate: string | null;
  crew: string | null;
  description: string | null;
}

export function useFormValidation(closePopIn: () => void) {
  const { addMission } = useMissionContext();
  const [values, setValues] = useState({

    name: '',
    launchDate: '',
    crew: '',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: null,
    launchDate: null,
    crew: null,
    description: null,
  });

  const crewInputRef = useRef<HTMLInputElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const launchDateInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLInputElement | null>(null);

  const crewBuffer = useRef<string[]>([]);

  const updateFormField = (name: string, value: string) => {
    if (name === 'name') {
      const nameError = value.match(/^\d+$/) ? 'Name cannot be a number' : null;
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: nameError,
      }));
    } else if (name === 'launchDate') {
      const currentDate = new Date();
      const selectedDate = new Date(value);
      const launchDateError =
        isNaN(selectedDate.getTime()) || selectedDate <= currentDate
          ? 'Launch date must be a valid date and should not be earlier than today.'
          : null;
      setErrors((prevErrors) => ({
        ...prevErrors,
        launchDate: launchDateError,
      }));
    } else if (name === 'crew') {
      const crewError =
        value.trim() === '' || value.match(/^\d+$/) ? 'Crew member must be a valid string.' : null;
      setErrors((prevErrors) => ({
        ...prevErrors,
        crew: crewError,
      }));
    }

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateAndAddCrewMember = () => {
    if (!errors.crew && values.crew.trim() !== '') {
      crewBuffer.current.push(values.crew);
      setValues((prevValues) => ({
        ...prevValues,
        crew: '',
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        crew: null,
      }));
      if (crewInputRef.current) {
        crewInputRef.current.focus();
      }
    }
  };

  const removeCrewMember = (index: number) => {
    crewBuffer.current.splice(index, 1);
  };

  const isFormValid = () => {
    return !Object.values(errors).some((error) => error !== null);
  };

  const clearForm = () => {
    setValues({
      name: '',
      launchDate: '',
      crew: '',
      description: '',
    });
    setErrors({
      name: null,
      launchDate: null,
      crew: null,
      description: null,
    });
    crewBuffer.current = [];
  };

  const handleSubmit = () => {
      const newMission: Mission = {
        id: '',
        name: values.name,
        launchDate: values.launchDate,
        crew: crewBuffer.current,
        description: values.description,
        state: true,
        createdAt: new Date(),
        updatedAt: null,
      };

      addMission(newMission)
      .then(() => {
        alert('Mission Added successfully');
      })
      .catch((error) => {
        console.error('Error adding mission: ', error);
      });

      clearForm();
      closePopIn();
  };

  return {
    values,
    errors,
    updateFormField,
    validateAndAddCrewMember,
    removeCrewMember,
    isFormValid,
    clearForm,
    crewBuffer: crewBuffer.current,
    nameInputRef,
    launchDateInputRef,
    crewInputRef,
    descriptionInputRef,
    handleSubmit,
  };
}

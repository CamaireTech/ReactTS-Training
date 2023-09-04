// useFormVerification.ts

import { useState } from 'react';

const useFormVerification = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateName = (name: string) => {
    if (!name.trim()) {
      return 'Name is required.';
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return 'Name should only contain letters and spaces.';
    }
    return '';
  };

  const validateDate = (date: string) => {
    const selectedDate = new Date(date);
    if (isNaN(selectedDate.getTime())) {
      return 'Invalid date format.';
    }
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      return 'Date cannot be in the past.';
    }
    return '';
  };

  const validateCrew = (crew: string) => {
    if (!crew.trim()) {
      return 'Crew member name is required.';
    }
    if (!/^[a-zA-Z\s]+$/.test(crew)) {
      return 'Crew member name should only contain letters and spaces.';
    }
    return '';
  };

  const validateForm = (values: { name: string; lunchDate: string; crew: string }) => {
    const newErrors: { [key: string]: string } = {};

    const nameError = validateName(values.name);
    if (nameError) {
      newErrors.name = nameError;
    }

    const dateError = validateDate(values.lunchDate);
    if (dateError) {
      newErrors.lunchDate = dateError;
    }

    const crewError = validateCrew(values.crew);
    if (crewError) {
      newErrors.crew = crewError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    errors,
    validateForm,
  };
};

export default useFormVerification;

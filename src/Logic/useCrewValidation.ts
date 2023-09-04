import { useState } from 'react';

const useCrewValidation = () => {
  const [crewMembers, setCrewMembers] = useState<string[]>(['']);
  const [isCrewValid, setIsCrewValid] = useState(true);

  const addCrewMember = () => {
    setCrewMembers([...crewMembers, '']);
  };

  const removeCrewMember = (index: number) => {
    const updatedCrew = [...crewMembers];
    updatedCrew.splice(index, 1);
    setCrewMembers(updatedCrew);
  };

  const validateCrew = () => {
    setIsCrewValid(
      crewMembers.every((member) => member.trim() !== '') &&
        crewMembers.length > 0
    );
  };

  return { crewMembers, isCrewValid, addCrewMember, removeCrewMember, validateCrew };
};

export default useCrewValidation;

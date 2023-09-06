import { useState } from 'react';

const usePopInLogic = () => {
  const [isPopInOpen, setIsPopInOpen] = useState(false);

  const openPopIn = () => {
    setIsPopInOpen(true);
  };

  const closePopIn = () => {
    setIsPopInOpen(false);
  };

  return { isPopInOpen, openPopIn, closePopIn };
};

export default usePopInLogic;

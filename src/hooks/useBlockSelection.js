// src/hooks/useBlockSelection.js
import { useState } from 'react';

const useBlockSelection = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleBlockClick = (block) => {
    setSelectedBlock(block);
  };

  const handleClosePreview = () => {
    setSelectedBlock(null);
  };

  return {
    selectedBlock,
    handleBlockClick,
    handleClosePreview,
  };
};

export default useBlockSelection;

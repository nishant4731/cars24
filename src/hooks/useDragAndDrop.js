// src/hooks/useDragAndDrop.js
import { useState } from 'react';

const useDragAndDrop = (transitionRules, setBlocks) => {
  const [draggedBlock, setDraggedBlock] = useState(null);
  const [isPromptVisible, setPromptVisible] = useState(false);
  const [transitionData, setTransitionData] = useState('');
  const [targetState, setTargetState] = useState('');

  const onDragStart = (e, block) => {
    setDraggedBlock(block);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, newState) => {
    if (draggedBlock && transitionRules[draggedBlock.state].includes(newState)) {
      setTargetState(newState);
      setPromptVisible(true);
    }
  };

  const handleDataChange = (e) => {
    setTransitionData(e.target.value);
  };

  const handleSubmit = () => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === draggedBlock.id
          ? { ...block, state: targetState, history: [...block.history, `Moved to ${targetState} with data: ${transitionData}`] }
          : block
      )
    );
    setPromptVisible(false);
    reset();
  };

  const handleCancel = () => {
    setPromptVisible(false);
    reset();
  };

  const reset = () => {
    setTransitionData('');
    setDraggedBlock(null);
    setTargetState('');
  };

  return {
    onDragStart,
    onDragOver,
    onDrop,
    handleDataChange,
    handleSubmit,
    handleCancel,
    isPromptVisible,
    transitionData,
  };
};

export default useDragAndDrop;

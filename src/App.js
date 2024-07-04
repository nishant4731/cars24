import React, { useState } from 'react';
import Swimlane from './components/Swimlane';
import Modal from './components/Modal';
import BlockPreview from './components/BlockPreview';
import Filter from './components/Filter';
import { transitionRules } from './config/transitionRules';
import useDragAndDrop from './hooks/useDragAndDrop';
import useBlockSelection from './hooks/useBlockSelection';
import './App.css';

const initialBlocks = [
  { id: 1, name: 'Block 1', state: 'State 1', history: ['Created'] },
  { id: 2, name: 'Block 2', state: 'State 1', history: ['Created'] },
  { id: 3, name: 'Block 3', state: 'State 2', history: ['Created'] },
];

const App = () => {
  const [blocks, setBlocks] = useState(initialBlocks);
  const [filterState, setFilterState] = useState('All');
  const {
    onDragStart,
    onDragOver,
    onDrop,
    handleDataChange,
    handleSubmit,
    handleCancel,
    isPromptVisible,
    transitionData,
  } = useDragAndDrop(transitionRules, setBlocks);
  const { selectedBlock, handleBlockClick, handleClosePreview } = useBlockSelection();

  const handleFilterStateChange = (e) => {
    setFilterState(e.target.value);
  };

  const filteredBlocks =
    filterState === 'All' ? blocks : blocks.filter((block) => block.state === filterState);

  return (
    <div className="app">
      <h1>Swimlane UI</h1>
      <Filter filterState={filterState} onFilterStateChange={handleFilterStateChange} />
      <div className="swimlanes">
        {Object.keys(transitionRules).map((state) => (
          <Swimlane
            key={state}
            state={state}
            blocks={filteredBlocks.filter((block) => block.state === state)}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragStart={onDragStart}
            onBlockClick={handleBlockClick}
          />
        ))}
      </div>
      <Modal
        isVisible={isPromptVisible}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        transitionData={transitionData}
        onDataChange={handleDataChange}
      />
      <BlockPreview block={selectedBlock} onClose={handleClosePreview} />
    </div>
  );
};

export default App;

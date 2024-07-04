import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import './styles/Swimlane.css';

const Swimlane = ({ state, blocks, onDrop, onDragOver, onDragStart, onBlockClick }) => (
  <div className="swimlane" onDrop={(e) => onDrop(e, state)} onDragOver={onDragOver}>
    <h2>{state}</h2>
    {blocks.map((block) => (
      <Block key={block.id} block={block} onDragStart={onDragStart} onClick={onBlockClick} />
    ))}
  </div>
);

Swimlane.propTypes = {
  state: PropTypes.string.isRequired,
  blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDrop: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onBlockClick: PropTypes.func.isRequired,
};

export default Swimlane;

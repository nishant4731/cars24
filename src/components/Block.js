import React from 'react';
import PropTypes from 'prop-types';
import './styles/Block.css';

const Block = ({ block, onDragStart, onClick }) => (
  <div
    className="block"
    draggable
    onDragStart={(e) => onDragStart(e, block)}
    onClick={() => onClick(block)}
  >
    <h3>{block.name}</h3>
  </div>
);

Block.propTypes = {
  block: PropTypes.object.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Block;

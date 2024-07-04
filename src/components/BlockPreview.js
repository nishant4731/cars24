// src/components/BlockPreview.js
import React from 'react';
import PropTypes from 'prop-types';
import './styles/BlockPreview.css';

const BlockPreview = ({ block, onClose }) => {
  if (!block) return null;

  return (
    <div className="block-preview" onClick={onClose}>
      <div className="block-preview-content" onClick={(e) => e.stopPropagation()}>
        <h2>Block Details</h2>
        <p>Name: {block.name}</p>
        <p>Current State: {block.state}</p>
        <h3>Transition History</h3>
        <ul>
          {block.history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

BlockPreview.propTypes = {
  block: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default BlockPreview;

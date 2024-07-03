// src/components/Modal.js
import React from 'react';
import PropTypes from 'prop-types';
import './styles/Modal.css';

const Modal = ({ isVisible, onSubmit, onCancel, transitionData, onDataChange }) => {
  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Provide Data for Transition</h2>
        <input
          type="text"
          value={transitionData}
          onChange={onDataChange}
          placeholder="Enter transition data"
        />
        <div className="button-wrapper">
          <button onClick={onSubmit}>Submit</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  transitionData: PropTypes.string.isRequired,
  onDataChange: PropTypes.func.isRequired,
};

export default Modal;

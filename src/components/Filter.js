import React from 'react';
import PropTypes from 'prop-types';
import './styles/Filter.css';

const Filter = ({ filterState, onFilterStateChange }) => (
  <div className="filter">
    <select value={filterState} onChange={onFilterStateChange}>
      <option value="All">All States</option>
      <option value="State 1">State 1</option>
      <option value="State 2">State 2</option>
      <option value="State 3">State 3</option>
    </select>
  </div>
);

Filter.propTypes = {
  filterState: PropTypes.string.isRequired,
  onFilterStateChange: PropTypes.func.isRequired,
};

export default Filter;

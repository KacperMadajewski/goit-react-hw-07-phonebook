import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => dispatch(setStatusFilter(e.target.value));

  return (
    <>
      <span>Finde contacts by name</span>
      <input type="text" name="filter" onChange={handleChange} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.any,
};

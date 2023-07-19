import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <>
      <span>Finde contacts by name</span>
      <input
        type="text"
        value={filter}
        placeholder="Write your contact"
        onChange={ev => dispatch(setFilter(ev.currentTarget.value))}
      />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.any,
};

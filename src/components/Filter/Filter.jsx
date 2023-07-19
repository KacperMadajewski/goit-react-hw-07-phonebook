import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
      <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        autoComplete="off"
        placeholder="Write your contact..."
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.any,
};

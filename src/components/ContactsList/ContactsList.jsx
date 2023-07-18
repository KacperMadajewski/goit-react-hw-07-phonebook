import { nanoid } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filters = useSelector(state => state.filters);

  const dispatch = useDispatch();

  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filters.toLowerCase())
        )
        .map(contact => (
          <li key={nanoid()}>
            {contact.name}: {contact.number}
            <button
              type="submit"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delet
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.any,
  filter: PropTypes.any,
  forDelet: PropTypes.func,
};

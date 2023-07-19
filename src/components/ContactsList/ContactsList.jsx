import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoding,
} from 'redux/selectors';

export const ContactsList = () => {
  const isLoading = useSelector(selectIsLoding);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {isLoading && !error ? (
          <p>Contacts loading...</p>
        ) : filteredContacts.length === 0 && !error ? (
          <p>The Phonebook is empty. Add your first contact. </p>
        ) : (
          filteredContacts.map(({ id, name, phone }) => (
            <li key={id}>
              {name}: {phone}
              <button type="submit" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.any,
  filter: PropTypes.any,
  forDelet: PropTypes.func,
};

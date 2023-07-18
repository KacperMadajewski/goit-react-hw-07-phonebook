import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showContacts } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    const saveContacts = JSON.parse(localStorage.getItem('contacts'));
    if (saveContacts) {
      dispatch(showContacts(saveContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('phoneContact', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

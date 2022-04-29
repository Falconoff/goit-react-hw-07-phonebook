import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import Form from '../Form';
import Contacts from '../Contacts';
import Filter from '../Filter';

// import { getContactsArr } from '../../redux/contactsSlice';

import { Container, TitleMain, TitleSecond } from './App.styled';

import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../../redux/contacts/contactsOperations';

function App() {
  // const contacts = useSelector(getContactsArr);

  // useEffect(() => {
  //   if (contacts.length === 0) {
  //     toast.error('Phonebook is empty!');
  //   }
  // }, [contacts]);

  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.entities);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Container>
      <Toaster
        toastOptions={{
          style: {
            border: '1px solid #713200',
            padding: '16px',
          },
        }}
      />
      <TitleMain>Phonebook</TitleMain>
      <Form />
      <TitleSecond>Contacts</TitleSecond>
      <Filter />
      <Contacts />
    </Container>
  );
}

export default App;

import { Toaster } from 'react-hot-toast';

import Form from '../Form';
import Contacts from '../Contacts';
import Filter from '../Filter';

import { Container, TitleMain, TitleSecond } from './App.styled';

function App() {
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

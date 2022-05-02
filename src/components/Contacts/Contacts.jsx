import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { getFilterValue } from '../../redux/filterSlice';
import { useFetchContactsQuery } from '../../redux/contactsSlice';

import ContactsListItem from './ListItem';

import { ContactsList } from './Contacts.styled';

export default function Contacts() {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();

  // for filter
  const filter = useSelector(getFilterValue);
  const normalizedFilter = filter.toLowerCase();
  let filteredContacts = [];
  if (contacts) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  if (error) {
    toast.error(`Error: ${error.data}`);
  }

  return (
    <ContactsList>
      {isLoading && <p>Loading...</p>}
      {contacts &&
        filteredContacts.map(contact => (
          <ContactsListItem key={contact.id} {...contact} />
        ))}
    </ContactsList>
  );
}

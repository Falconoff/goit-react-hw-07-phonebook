import { useDispatch, useSelector } from 'react-redux';

import { getFilterValue } from '../../redux/filterSlice';

import { useFetchContactsQuery } from '../../redux/contactsSlice';

import { ContactsList } from './Contacts.styled';

import ContactsListItem from './ListItem';

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

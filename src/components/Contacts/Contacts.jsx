import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

// import { delContactAction, getContactsArr } from '../../redux/contactsSlice';

import { getFilterValue } from '../../redux/filterSlice';

// import { getContacts } from '../../service/apiService';

import { contactsOperations, contactsSelectors } from 'redux/contacts';
// import * as contactsSelectors from '../../redux/contacts/contactsSelectors';

import { useFetchContactsQuery } from '../../redux/contactsSlice';

import { ContactsList } from './Contacts.styled';

import ContactsListItem from './ListItem';

export default function Contacts() {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();

  console.log('contacts: ', contacts);
  console.log('error: ', error?.data);
  console.log('isLoading: ', isLoading);

  // const filter = '';

  // for filter
  const filter = useSelector(getFilterValue);
  const normalizedFilter = filter.toLowerCase();
  let filteredContacts = [];
  if (contacts) {
    console.log('contacts is exist');

    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    console.log('normalizedFilter in Contacts:', normalizedFilter);
    console.log('filteredContacts in Contacts:', filteredContacts);
  }

  /*
  // const contacts = useSelector(getContactsArr);
  // const filter = useSelector(getFilterValue);
  const filter = useSelector(contactsSelectors.getFilterValue);

  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.entities);
  const contacts = useSelector(contactsSelectors.getContacts);

  console.log('contacts: ', contacts);

  // for filter
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  // const deleteContact = id => {
  //   dispatch(delContactAction(id));
  //   toast.success('Successfully deleted!');
  // };


  useEffect(() => {
    // dispatch(contactsOperations.fetchContacts());
  }, []);
  */

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

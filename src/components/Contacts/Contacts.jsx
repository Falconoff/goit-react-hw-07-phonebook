import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { delContactAction, getContactsArr } from '../../redux/contactsSlice';

import { getFilterValue } from '../../redux/filterSlice';

// import { getContacts } from '../../service/apiService';

import { contactsOperations, contactsSelectors } from 'redux/contacts';
// import * as contactsSelectors from '../../redux/contacts/contactsSelectors';

import {
  ContactsList,
  ContactsListItem,
  UserName,
  DeleteBtn,
} from './Contacts.styled';
import { useEffect } from 'react';

export default function Contacts() {
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
    dispatch(contactsOperations.fetchContacts());
  }, []);

  return (
    // <>
    //   <h1>test</h1>
    // </>
    <ContactsList>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactsListItem key={id}>
          <p>
            <UserName>{name}: </UserName>
            {number}
          </p>
          {/* <DeleteBtn onClick={() => deleteContact(id)}>delete</DeleteBtn> */}
        </ContactsListItem>
      ))}
    </ContactsList>
  );
}

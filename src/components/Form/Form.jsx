/*
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';

import { setContactsAction, getContactsArr } from '../../redux/contactsSlice';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

import { entities } from 'redux/contacts/contactsReducers';

import { FormTag, InputField, FormBtn } from './Form.styled';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    formSubmitHandler({ name, number });
    resetState();
  };

  const contacts = useSelector(contactsSelectors.getContacts);

  // add new contact
  const formSubmitHandler = ({ name, number }) => {
    // checking name for matches
    const normalizedName = name.toLowerCase();
    const isFoundName = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
    // if already exist - show message
    if (isFoundName) {
      toast.error(`${name} is already in contacts!`);
      return;
    }
    // if not found, add new contact
    const newData = { id: nanoid(5), name, number };
    // dispatch(setContactsAction(newData)); // old
    dispatch(entities(newData));

    toast.success('Successfully added!');
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormTag onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p>Number</p>
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <p>
        <FormBtn type="submit">Add contact</FormBtn>
      </p>
    </FormTag>
  );
}
*/

// =====================================================================

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';
import { useAddNewContactMutation } from '../../redux/contactsSlice';
import { getContactsArr } from '../../redux/contactsSlice';

import { FormTag, InputField, FormBtn } from './Form.styled';

// -------

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const contacts = useSelector(getContactsArr);

  let contacts = useSelector(state => state.contacts.queries.data);
  console.log('contacts 1 from Form:', contacts);
  // const { data: contacts, error, isLoading } = useFetchContactsQuery();

  const [addNewContact, { isLoading }] = useAddNewContactMutation();

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    formSubmitHandler({ name, number });
    console.log('Form data: ', { name, number });
    // contacts = useSelector(state => state.contacts.queries.data);
    console.log('contacts 2 from Form:', contacts);
    resetState();
  };

  const formSubmitHandler = ({ name, number }) => {
    // checking name for matches

    const normalizedName = name.toLowerCase();
    const isFoundName = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
    // if already exist - show message
    if (isFoundName) {
      toast.error(`${name} is already in contacts!`);
      return;
    }

    // if not found, add new contact
    addNewContact({ name, number });

    toast.success('Successfully added!');
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormTag onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p>Number</p>
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <p>
        <FormBtn type="submit" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add contact'}
        </FormBtn>
      </p>
    </FormTag>
  );
}

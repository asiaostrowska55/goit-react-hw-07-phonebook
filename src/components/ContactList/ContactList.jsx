import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors.js';
import css from './ContactList.module.css';
import { deleteContacts } from 'redux/contactSlicer';

const ContactsList = storage => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContact = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      contact.number
        .replace(/-|\s/g, '')
        .includes(filterValue.replace(/-|\s/g, ''))
  );

  const handledDelete = id => {
    dispatch(deleteContacts(id));
    localStorage.setItem(storage, JSON.stringify(contacts));
  };

  const listItems =
    filterContact === []
      ? ''
      : filterContact.map(item => {
          return (
            <li key={item.id} id={item.id} className={css.element}>
              {item.name}: {item.phone}
              <button
                onClick={() => handledDelete(item.id)}
                className={css.btnDelete}
              >
                Delete
              </button>
            </li>
          );
        });

  return <ul className={css.listItem}>{listItems}</ul>;
};

export default ContactsList;

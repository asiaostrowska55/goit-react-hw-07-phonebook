import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactSlicer';
import { selectFilter, selectContacts } from 'redux/selectors';

const ContactsList = ({ storage }) => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterStatus = filterValue.status;
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterStatus)
  );

  const handledDelete = id => {
    dispatch(deleteContact(id));
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

// const ContactsList = storage => {
//   const contacts = useSelector(selectContacts);
//   const filterValue = useSelector(selectFilter);
//   const dispatch = useDispatch();

//   const filterContact = contacts.filter(
//     contact =>
//       contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
//       contact.number
//         .replace(/-|\s/g, '')
//         .includes(filterValue.replace(/-|\s/g, ''))
//   );

//   const handledDelete = id => {
//     dispatch(deleteContacts(id));
//     localStorage.setItem(storage, JSON.stringify(contacts));
//   };

//   const listItems =
//     filterContact === []
//       ? ''
//       : filterContact.map(item => {
//           return (
//             <li key={item.id} id={item.id} className={css.element}>
//               {item.name}: {item.phone}
//               <button
//                 onClick={() => handledDelete(item.id)}
//                 className={css.btnDelete}
//               >
//                 Delete
//               </button>
//             </li>
//           );
//         });

//   return <ul className={css.listItem}>{listItems}</ul>;
// };

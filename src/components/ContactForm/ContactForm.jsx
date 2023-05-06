import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactSlicer';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // const contact = {
    //   name: form.name.value,
    //   number: form.number.value,
    // };

    // console.log('Form name:', form.name.value);
    // console.log('Form number:', form.phone.value);

    let isContact;

    contacts.forEach(person => {
      if (form.name.value.toLowerCase() === person.name.toLowerCase()) {
        isContact = true;
      }
    });
    isContact
      ? alert(`${form.name.value} is already in contacts!`)
      : dispatch(
          addContact({
            id: nanoid(),
            name: form.name.value,
            phone: form.phone.value,
          })
        );

    form.reset();
  };

  const numberId = nanoid();
  const nameId = nanoid();

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          Name
        </label>
        <input
          className={css.input}
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label} htmlFor={numberId}>
          Number
        </label>
        <input
          className={css.input}
          id={numberId}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="tel"
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

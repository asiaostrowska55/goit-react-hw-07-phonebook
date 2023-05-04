import css from './Filter.module.css';
import { filterContacts } from '../../redux/filterSlicer';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filterContacts(value));
  };
  return (
    <div className={css.filter}>
      <label htmlFor="filter">
        Filter contacts by name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={changeFilter}
          id="filter"
        />
      </label>
    </div>
  );
};

export default Filter;

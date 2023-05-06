import css from './Filter.module.css';
import { setFilter } from '../../redux/filterSlicer';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

const Filter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();

  const changeFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
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
          id={filterId}
        />
      </label>
    </div>
  );
};

export default Filter;

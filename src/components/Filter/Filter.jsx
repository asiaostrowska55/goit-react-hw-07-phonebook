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
          pattern="^[a-zA-Zа-яА-Я\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\u00D3\u00F3\u015A\u015B\u0179\u017A\u017B\u017C]+(([' \-][a-zA-Zа-яА-Я \u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\u00D3\u00F3\u015A\u015B\u0179\u017A\u017B\u017C])?[a-zA-Zа-яА-Я \u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\u00D3\u00F3\u015A\u015B\u0179\u017A\u017B\u017C]*)*$"
          onChange={changeFilter}
          id={filterId}
        />
      </label>
    </div>
  );
};

export default Filter;

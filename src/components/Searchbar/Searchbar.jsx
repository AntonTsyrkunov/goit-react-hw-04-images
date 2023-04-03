import { useState } from 'react';
import css from '../styles/styles.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({onSubmit}) => { 

  const [query, setQuery] = useState('');

  const handleInputChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSearch = evt => {
    evt.preventDefault();
    onSubmit(query);
    setQuery('');
  };

    return (
      <header className={css.Searchbar}>
        <form onSubmit={handleSearch} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span>Search</span>
          </button>

          <input
            name="query"
            value={query}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeHolder="Search images and photos"
            onChange={handleInputChange}
          />
        </form>
      </header>
    );
  }


export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

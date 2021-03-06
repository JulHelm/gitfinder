import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Search = (props) => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  }; // [...] ermöglicht immer das feld des forms zu nehmen dessen name gerade geändert wird.

  const onSubmit = e => {
    //arrowfunction does not nee bind(this)
    e.preventDefault(); //otherwise it prints to a file
    if (text === '') {
     props.setAlert('Please enter something', 'danger');
    } else {
      props.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {props.showClear && (
        <button
          className='btn- btn-light btn-block'
          onClick={props.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;

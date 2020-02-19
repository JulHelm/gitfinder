import React from 'react';
import PropTypes from 'prop-types'

const UsersItem = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        alt=''
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UsersItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UsersItem;

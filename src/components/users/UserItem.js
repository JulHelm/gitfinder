import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const UsersItem = (props) => {
  return (
    <div className='card text-center'>
      <img
        src={props.user.avatar_url}
        className='round-img'
        alt=''
        style={{ width: '60px' }}
      />
      <h3>{props.user.login}</h3>
      <div>
        <Link to={`/user/${props.user.login}`} className='btn btn-dark sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UsersItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UsersItem;

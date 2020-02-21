import React, { useEffect, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import Users from './Users';

const User = props => {
  useEffect(() => {
    props.getUser(props.match.params.login);
    props.getUserRepos(props.match.params.login);
  }, []);

  if (props.loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      <div>
        {' '}
        Hireable:{' '}
        {props.user.hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
      </div>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={props.user.avatar_url}
            className='round-img'
            style={{ width: '150px' }}
            alt=''
          />
          <h1>{props.user.name}</h1>
          <p>Location: {props.user.location}</p>
        </div>
        <div>
          {props.user.bio && (
            <Fragment>
              <h3>BIO</h3>
              <p>{props.user.bio}</p>
            </Fragment>
          )}
          <a href={props.user.html_url} className='btn btn-dark my-1'>
            Visit Profile
          </a>
          <ul>
            <li>
              {props.user.login && (
                <Fragment>
                  <strong>Username:</strong> {props.user.login}
                </Fragment>
              )}
            </li>
            <li>
              {props.user.company && (
                <Fragment>
                  <strong>Company:</strong> {props.user.company}
                </Fragment>
              )}
            </li>
            <li>
              {props.user.blog && (
                <Fragment>
                  <strong>Website:</strong> {props.user.blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>
          Followers: {props.user.followers}
        </div>
        <div className='badge badge-success'>
          Following: {props.user.following}
        </div>
        <div className='badge badge-light'>
          Public Repos: {props.user.repos}
        </div>
        <div className='badge badge-dark'>
          Public Gists: {props.user.public_gists}
        </div>
      </div>
      <Repos repos={props.repos} />
    </Fragment>
  );
};

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
};

export default User;

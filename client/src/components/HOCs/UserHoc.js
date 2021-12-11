import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getUserAction,
  onlyForNotAuthorize,
} from '../../actions/actionCreator';
import Spinner from '../Spinner/Spinner';

const UserHoc = (Component) => {
  const Hoc = (props) => {
    const { data, isFetching, history, match, getUser, checkAuth } = props;
    useEffect(() => {
      if (!data) getUser(history.replace);
      else checkAuth(history.replace);
    }, []);
    return (
      <>
        {isFetching ? (
          <Spinner />
        ) : (
          <Component history={history} match={match} {...props} />
        )}
      </>
    );
  };

  const mapStateToProps = (state) => state.userStore;

  const mapDispatchToProps = (dispatch) => ({
    getUser: (data) => dispatch(getUserAction(data)),
    checkAuth: (data) => dispatch(onlyForNotAuthorize(data)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Hoc);
};

export default UserHoc;

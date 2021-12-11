import React from 'react';
import { connect } from 'react-redux';
import { getUserAction } from '../../actions/actionCreator';
import Spinner from '../Spinner/Spinner';

const PrivateHoc = (Component, props) => {
  const mapStateToProps = (state) => state.userStore;

  const mapDispatchToProps = (dispatch) => ({
    getUser: (data) => dispatch(getUserAction(data)),
  });

  class Hoc extends React.Component {
    componentDidMount() {
      const {
        data,
        history: { replace },
        getUser,
      } = this.props;
      if (!data) {
        getUser(replace);
      }
    }

    render() {
      const { isFetching, history, match } = this.props;
      return (
        <>
          {isFetching ? (
            <Spinner />
          ) : (
            <Component history={history} match={match} {...props} />
          )}
        </>
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Hoc);
};

export default PrivateHoc;

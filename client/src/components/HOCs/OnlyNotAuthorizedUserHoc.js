import React from 'react';
import { connect } from 'react-redux';
import { onlyForNotAuthorize } from '../../actions/actionCreator';
import Spinner from '../Spinner/Spinner';

const OnlyNotAuthorizedUserHoc = (Component) => {
  const mapStateToProps = (state) => state.userStore;

  const mapDispatchToProps = (dispatch) => ({
    checkAuth: (data) => dispatch(onlyForNotAuthorize(data)),
  });

  class HocForLoginSignUp extends React.Component {
    componentDidMount() {
      const {
        checkAuth,
        history: { replace },
      } = this.props;
      checkAuth(replace);
    }

    render() {
      const { isFetching, data, history } = this.props;
      if (isFetching) {
        return <Spinner />;
      }
      if (!data) {
        return <Component history={history} />;
      }
      return null;
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(HocForLoginSignUp);
};

export default OnlyNotAuthorizedUserHoc;

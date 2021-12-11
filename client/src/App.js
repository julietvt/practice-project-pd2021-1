import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import Payment from './pages/Payment/Payment';
import StartContestPage from './pages/StartContestPage/StartContestPage';
import Dashboard from './pages/Dashboard/Dashboard';
//import PrivateHoc from './components/HOCs/PrivateHoc';
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home/Home';
//import OnlyNotAuthorizedUserHoc from './components/HOCs/OnlyNotAuthorizedUserHoc'
import ContestPage from './pages/ContestPage/ContestPage';
import UserProfile from './pages/UserProfile/UserProfile';
import 'react-toastify/dist/ReactToastify.css';
import ContestCreationPage from './pages/ContestCreation/ContestCreationPage';
import CONSTANTS from './constants';
import browserHistory from './browserHistory';
import ChatContainer from './components/Chat/ChatComponents/ChatContainer/ChatContainer';
import UserHoc from './components/HOCs/UserHoc';
import PricingPage from './pages/PricingPage';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={UserHoc(LoginPage)} />
          <Route
            exact
            path="/registration"
            component={UserHoc(RegistrationPage)}
          />
          <Route exact path="/payment" component={UserHoc(Payment)} />
          <Route
            exact
            path="/startContest"
            component={UserHoc(StartContestPage)}
          />
          <Route
            exact
            path="/startContest/nameContest"
            component={UserHoc(ContestCreationPage, {
              contestType: CONSTANTS.NAME_CONTEST,
              title: 'Company Name',
            })}
          />
          <Route
            exact
            path="/startContest/taglineContest"
            component={UserHoc(ContestCreationPage, {
              contestType: CONSTANTS.TAGLINE_CONTEST,
              title: 'TAGLINE',
            })}
          />
          <Route
            exact
            path="/startContest/logoContest"
            component={UserHoc(ContestCreationPage, {
              contestType: CONSTANTS.LOGO_CONTEST,
              title: 'LOGO',
            })}
          />
          <Route exact path="/dashboard" component={UserHoc(Dashboard)} />
          <Route exact path="/contest/:id" component={UserHoc(ContestPage)} />
          <Route exact path="/account" component={UserHoc(UserProfile)} />
          <Route exact path="/pricing" component={PricingPage} />
          <Route component={NotFound} />
        </Switch>
        <ChatContainer />
      </Router>
    );
  }
}

export default App;

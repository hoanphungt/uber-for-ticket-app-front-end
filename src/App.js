import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/events/EventsListContainer';
import LoginFormContainer from './components/logins/LoginFormContainer';
import Logout from './components/logout/Logout';
import TicketsListContainer from './components/tickets/TicketsListContainer';
// import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Welcome to my Uber-for-Ticket-App</h1>
          {/* <Routes /> */}
          <Route path="/events" exact component={EventsListContainer} />
          <Route path="/events/:id/tickets" exact component={TicketsListContainer} />
          
          <Route path='/login' exact component={LoginFormContainer} />
          <Route path='/logout' exact component={Logout} />
        </div>
      </Provider>
    );
  }
}

export default App;
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import LoginFormContainer from './logins/LoginFormContainer'
import Logout from './logout/Logout';
import EventsListContainer from './events/EventsListContainer';
import TicketsListContainer from './tickets/TicketsListContainer';
import TicketDetailsContainer from './tickets/TicketDetailsContainer';
import SignupFormContainer from './signup/SignupFormContainer';

function Routes(props) {
  return (<div>
    {!props.authenticated &&
      <Switch>
        <Route path="/events" exact component={EventsListContainer} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="" render={() => <Redirect to="/events" />} />
      </Switch>}

    {props.authenticated &&
      <Switch>
        <Route path="/signup" exact component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />        
        <Route path="/logout" exact component={Logout} />
        <Route path="/events" exact component={EventsListContainer} />
        <Route path="/events/:id/tickets" exact component={TicketsListContainer} />
        <Route path="/tickets/:id" exact component={TicketDetailsContainer} />
        <Route path="" render={() => <Redirect to="/events" />} />
      </Switch> }
  </div>)
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(Routes))
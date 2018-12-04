import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import LoginFormContainer from './logins/LoginFormContainer'
import Logout from './logout/Logout';
import EventsListContainer from './events/EventsListContainer';
import TicketsListContainer from './tickets/TicketsListContainer';

function Routes(props) {
  return (<div>
    {!props.authenticated &&
      <Switch>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="" render={() => <Redirect to="/login" />} />
      </Switch>}

    {props.authenticated &&
      <Switch>
        <Route path="/logout" exact component={Logout} />
        <Route path="/events" exact component={EventsListContainer} />
        <Route path="/events/:id/tickets" exact component={TicketsListContainer} />
        <Route path="" render={() => <Redirect to="/events" />} />
      </Switch> }
  </div>)
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(Routes))
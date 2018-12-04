import React from 'react'
import { connect } from 'react-redux';
import { loadEvents } from '../../actions/events'
import { EventsList } from './EventsList';
import EventFormContainer from './EventFormContainer';
// import { Link } from 'react-router-dom'

class EventsListContainer extends React.Component {
    componentDidMount() {
        this.props.loadEvents()
    }
    
    render() {
        return (
            <div>
                <EventsList events={this.props.events}/>
                <EventFormContainer />
                <button onClick={() => this.props.history.push('/logout')}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    events: state.events
})

export default connect(mapStateToProps, {loadEvents})(EventsListContainer) 
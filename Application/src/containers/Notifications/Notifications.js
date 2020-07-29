import React, { Component } from 'react';
import NotificationRow from '../../components/Rows/NotificationRow/NotificationRow';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/notifications';

class Notifications extends Component {

    componentDidMount() {
        this.props.onLoadNotifications();
    }

    render() {
        let notifications = this.props.loading ? <Spinner /> : null;
        let error = this.props.error ? <h3>Error loading notifications.</h3> : null;

        if (!this.props.loading) {
            notifications = this.props.notifications.map(n => {
                return <NotificationRow key={n.id}
                    sender={n.sender}
                    subject={n.subject}
                    message={n.message}
                    date={n.date}
                />
            });
        }

        return (
            <div style={{ padding: '2rem' }}>
                {notifications}
                {error}
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        notifications: state.notifications.notifications,
        loading: state.notifications.loading,
        error: state.notifications.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadNotifications: () => dispatch(actions.loadNotifications())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

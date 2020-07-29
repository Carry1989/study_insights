import * as actionTypes from './actionTypes';

export const loadNotifications = () => {
    return dispatch => {
        dispatch(loadNotificationsStart());

        const notifications = [
            {
                id: 1,
                sender: 'MT',
                subject: 'URS',
                message: 'Deadline for URS tomorrow.',
                read: false,
                date: '14.05.2019'
            },
            {
                id: 2,
                sender: 'ST',
                subject: 'BEC2',
                message: 'BEC2 exam announced on SharePoint.',
                read: false,
                date: '15.05.2019'
            },
            {
                id: 3,
                sender: 'FH',
                subject: 'DWH',
                message: 'Send weekly assignments.',
                read: false,
                date: '16.05.2019'
            }
        ];

        setTimeout(() => {
            console.log('Notifications loaded!');
            dispatch(loadNotificationsSuccess(notifications));
        }, 1000);
    }
}

export const loadNotificationsStart = () => {
    return {
        type: actionTypes.LOAD_NOTIFICATIONS_START
    }
}

export const loadNotificationsSuccess = (data) => {
    return {
        type: actionTypes.LOAD_NOTIFICATIONS_SUCCESS,
        payload: data
    }
}

export const loadNotificationsFail = () => {
    return {
        type: actionTypes.LOAD_NOTIFICATIONS_FAIL
    }
}
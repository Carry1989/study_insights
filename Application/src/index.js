import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// redux setup
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducers
import authReducer from './store/reducers/auth';
import notificationsReducer from './store/reducers/notifications';
import profileReducer from './store/reducers/profile';
import progressReducer from './store/reducers/progress';
import coursesReducer from './store/reducers/courses';
import filterReducer from './store/reducers/filters';
import dashboardReducer from './store/reducers/dashboard';

const rootReducer = combineReducers({
    auth: authReducer,
    notifications: notificationsReducer,
    profile: profileReducer,
    progress: progressReducer,
    courses: coursesReducer,
    filters: filterReducer,
    dashboard: dashboardReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();

import React, { Component, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';
import Spinner from '../components/UI/Spinner/Spinner';

const Auth = React.lazy(() => import('./Auth/Auth'));
const Home = React.lazy(() => import('./Home/Home'));
const Courses = React.lazy(() => import('./Courses/Courses'));
const Progress = React.lazy(() => import('./Progress/Progress'));
const Notifications = React.lazy(() => import('./Notifications/Notifications'));
const Profile = React.lazy(() => import('./Profile/Profile'));
const CourseDescription = React.lazy(() => import('../components/CourseDescription/CourseDescription'));

class App extends Component {

  state = {
    auth: false
  };

  changeState = (event) => {
    event.preventDefault();
    this.setState(prevState => {
      return { auth: !prevState.auth };
    });
  }

  render() {
    let title = "Dashboard";

    if (this.props.location.pathname === "/dashboard") {
      title = "Dashboard";
    }

    if (this.props.location.pathname === "/courses/current") {
      title = "Current Courses";
    }

    if (this.props.location.pathname === "/courses/upcoming") {
      title = "Upcoming Courses";
    }

    if (this.props.location.pathname === "/courses/failed") {
      title = "Failed Courses";
    }

    if (this.props.location.pathname === "/progress/currentGrades") {
      title = "Progress";
    }

    if (this.props.location.pathname === "/progress/allGrades") {
      title = "Progress History";
    }

    if (this.props.location.pathname === "/progress/summary") {
      title = "Progress Summary";
    }

    if (this.props.location.pathname === "/notifications") {
      title = "Notifications";
    }

    if (this.props.location.pathname === "/profile") {
      title = "Profile";
    }

    if (this.props.location.pathname.includes('description')) {
      let code = this.props.location.state.data.courseCode;
      title = "Course Description " + code;
    }

    let routes = (
      <Switch>
        <Route path="/" render={() => (
          <Suspense fallback={<div>Spinner...</div>}>
            <Auth click={this.changeState} />
          </Suspense>
        )} />
      </Switch>
    );

    if (this.state.auth) {
      routes = (
        <Switch>
          <Route path="/dashboard" render={() =>
            <Suspense fallback={<Spinner />} >
              <Home />
            </Suspense>} />

          <Route path="/courses" render={() =>
            <Suspense fallback={<Spinner />} >
              <Courses />
            </Suspense>} />

          <Route path="/progress" render={() =>
            <Suspense fallback={<Spinner />} >
              <Progress />
            </Suspense>} />

          <Route path="/notifications" render={() =>
            <Suspense fallback={<Spinner />} >
              <Notifications />
            </Suspense>} />

          <Route path="/profile" render={() =>
            <Suspense fallback={<Spinner />} >
              <Profile />
            </Suspense>} />

          <Route path="/description/:code" render={() =>
            <Suspense fallback={<Spinner />} >
              <CourseDescription />
            </Suspense>} />

          <Route path="/" render={() =>
            <Suspense fallback={<Spinner />} >
              <Home />
            </Suspense>} />
        </Switch>
      );
    }

    return (
      <Layout title={title} auth={this.state.auth} logOut={this.changeState}>
        {routes}
      </Layout>
    );
  }
}

export default withRouter(App);

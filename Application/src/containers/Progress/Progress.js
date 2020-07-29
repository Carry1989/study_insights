import React, { Component } from 'react';
import InnerNavItems from '../../components/Navigation/InnerNavigation/InnerNavItems';
import ProgressRows from '../../components/Rows/ProgressRows/ProgressRows';
import Spinner from '../../components/UI/Spinner/Spinner';
import SquareButton from '../../components/UI/Buttons/SquareButton/SquareButton';
import TableHeader from '../../components/UI/Table/Header/TableHeader';
import Summary from '../../components/Summary/Summary';
import PopUp from '../../components/PopUp/PopUp';
import classes from './Progress.css';
import { Route, withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/progress';
import * as sortFunctions from '../../shared/sort';
import { connect } from 'react-redux';

class Progress extends Component {
    state = {
        progressData: this.props.progressData,
        progressDataCurrent: this.props.progressDataCurrent,
        showPopUp: false
    }

    componentDidMount() {
        this.props.onLoadProgressData();
        this.props.onLoadProgressSummary();
    }

    sortUp = (propertyName) => {
        let sortedArray = [];
        let path = this.props.location.pathname;
        if (path === '/progress/currentGrades') {
            sortedArray = sortFunctions.sortUp(propertyName, this.props.progressDataCurrent);
            if (this.props.filteredProgressCurrent.length > 0) {
                sortedArray = sortFunctions.sortUp(propertyName, this.props.filteredProgressCurrent);
            }
            this.setState({
                progressDataCurrent: sortedArray
            });
        } else {
            sortedArray = sortFunctions.sortUp(propertyName, this.props.progressData);
            if (this.props.filteredProgress.length > 0) {
                sortedArray = sortFunctions.sortUp(propertyName, this.props.filteredProgress);
            }
            this.setState({
                progressData: sortedArray
            });
        }
    };


    sortDown = (propertyName) => {
        let sortedArray = [];
        let path = this.props.location.pathname;
        if (path === '/progress/currentGrades') {
            sortedArray = sortFunctions.sortDown(propertyName, this.props.progressDataCurrent);
            if (this.props.filteredProgressCurrent.length > 0) {
                sortedArray = sortFunctions.sortDown(propertyName, this.props.filteredProgressCurrent);
            }
            this.setState({
                progressDataCurrent: sortedArray
            });
        } else {
            sortedArray = sortFunctions.sortDown(propertyName, this.props.progressData);
            if (this.props.filteredProgress.length > 0) {
                sortedArray = sortFunctions.sortDown(propertyName, this.props.filteredProgress);
            }
            this.setState({
                progressData: sortedArray
            });
        }
    };


    togglePopUp = () => {
        this.setState(prevState => {
            return {
                showPopUp: !prevState.showPopUp
            }
        });
    }

    render() {
        let data = [
            { id: 0, link: '/currentGrades', text: 'Current' },
            { id: 1, link: '/allGrades', text: 'All Grades' },
            { id: 2, link: '/summary', text: 'Summary' }
        ];

        let grades = this.props.loading ? <Spinner /> : null;
        let gradesCurrent = this.props.loading ? <Spinner /> : null;
        let error = this.props.error ? <h3>Error loading progress data.</h3> : null;

        if (!this.props.loading) {
            grades = <ProgressRows array={this.props.progressData} />;
            gradesCurrent = <ProgressRows array={this.props.progressDataCurrent} />;
        }

        if (this.props.filteredProgress.length > 0) {
            grades = <ProgressRows array={this.props.filteredProgress} />;
        }

        if (this.props.filteredProgressCurrent.length > 0) {
            gradesCurrent = <ProgressRows array={this.props.filteredProgressCurrent} />;
        }

        let popUp = (
            <PopUp toggle={this.togglePopUp}
                data={this.props.progressData}
                dataCurrent={this.props.progressDataCurrent}
                courses={false} />
        );

        return (
            <div style={{ padding: '3rem' }}>
                {this.state.showPopUp ? popUp : null}

                <div className={classes.innerNav}>
                    <InnerNavItems array={data} />
                    <SquareButton icon="icon-funnel" title="Filter" onClick={() => this.togglePopUp()} />
                </div>

                <Route path={this.props.match.url + '/currentGrades'} render={() => (
                    <div>
                        <div style={{ display: 'flex', marginTop: '2rem' }}>
                            <TableHeader name="Code"
                                actionUp={() => this.sortUp('courseCode')}
                                actionDown={() => this.sortDown('courseCode')} />
                            <TableHeader name="Name"
                                actionUp={() => this.sortUp('courseName')}
                                actionDown={() => this.sortDown('courseName')} />
                            <TableHeader name="Semester"
                                actionUp={() => this.sortUp('semester')}
                                actionDown={() => this.sortDown('semester')} />
                            <TableHeader name="Score"
                                actionUp={() => this.sortUp('eCs')}
                                actionDown={() => this.sortDown('eCs')} />
                            <TableHeader name="ECs"
                                actionUp={() => this.sortUp('eCs')}
                                actionDown={() => this.sortDown('eCs')} />
                            <TableHeader name="Status"
                                actionUp={() => this.sortUp('status')}
                                actionDown={() => this.sortDown('status')} />
                        </div>

                        {gradesCurrent}
                        {error}
                    </div>
                )} />

                <Route path={this.props.match.url + '/allGrades'} render={() => (
                    <div>
                        <div style={{ display: 'flex', marginTop: '2rem' }}>
                            <TableHeader name="Code"
                                actionUp={() => this.sortUp('courseCode')}
                                actionDown={() => this.sortDown('courseCode')} />
                            <TableHeader name="Name"
                                actionUp={() => this.sortUp('courseName')}
                                actionDown={() => this.sortDown('courseName')} />
                            <TableHeader name="Semester"
                                actionUp={() => this.sortUp('semester')}
                                actionDown={() => this.sortDown('semester')} />
                            <TableHeader name="Score"
                                actionUp={() => this.sortUp('eCs')}
                                actionDown={() => this.sortDown('eCs')} />
                            <TableHeader name="ECs"
                                actionUp={() => this.sortUp('eCs')}
                                actionDown={() => this.sortDown('eCs')} />
                            <TableHeader name="Status"
                                actionUp={() => this.sortUp('status')}
                                actionDown={() => this.sortDown('status')} />
                        </div>

                        {grades}
                        {error}
                    </div>
                )} />

                <Route path={this.props.match.url + '/summary'}
                    render={() => <Summary data={this.props.summaryProgressData}
                        loading={this.props.loadingSummary} />} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // data for all progress
        progressData: state.progress.progressData,
        filteredProgress: state.filters.filteredProgress,
        loading: state.progress.loading,
        error: state.progress.error,

        // data for current section
        progressDataCurrent: state.progress.progressDataCurrent,
        filteredProgressCurrent: state.filters.filteredProgressCurrent,

        // data for summary section 
        summaryProgressData: state.progress.progressSummary,
        loadingSummary: state.progress.loadingSummary
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadProgressData: () => dispatch(actions.loadProgressData()),
        onLoadProgressSummary: () => dispatch(actions.loadProgressSummary())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Progress));

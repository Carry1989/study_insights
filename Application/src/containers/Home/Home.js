import React, { Component } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import LargeCard from '../../components/Cards/LargeCard/LargeCard';
import SmallCard from '../../components/Cards/SmallCard/SmallCard';
import classes from './Home.css';
import * as actions from '../../store/actions/dashboard';

class Home extends Component {

    componentDidMount() {
        this.props.onLoadDashboardData();
    }

    render() {
        const data = {
            labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4',
                'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'],
            datasets: [
                {
                    label: 'Semester Progress',
                    backgroundColor: 'rgba(116, 64, 94, 0.5)',
                    borderColor: 'rgba(116, 64, 94, 0.5)',
                    borderWidth: 1,
                    hoverBackgroundColor: '#5d2851',
                    hoverBorderColor: '#5d2851',
                    data: [this.props.averagePerSemester.semester1,
                    this.props.averagePerSemester.semester2,
                    this.props.averagePerSemester.semester3,
                    this.props.averagePerSemester.semester4,
                    this.props.averagePerSemester.semester5,
                    this.props.averagePerSemester.semester6,
                    this.props.averagePerSemester.semester7,
                    this.props.averagePerSemester.semester8,
                        0, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                }
            ]
        };

        const donut_data = {
            labels: [
                'Block 1',
                'Block 2',
                'Block 3',
                'Block 4'
            ],
            datasets: [{
                data: [Math.floor(this.props.previousYearAveragePerBlock.average1 * 100) / 100,
                Math.floor(this.props.previousYearAveragePerBlock.average2 * 100) / 100,
                Math.floor(this.props.previousYearAveragePerBlock.average3 * 100) / 100,
                Math.floor(this.props.previousYearAveragePerBlock.average4 * 100) / 100],
                backgroundColor: [
                    '#905575',
                    '#c399b0',
                    '#c5598d',
                    '#892f5b'
                ],
                hoverBackgroundColor: [
                    'rgba(116, 64, 94, 0.7)',
                    '#57103e',
                    '#cc7dc1',
                    '#692d5c'
                ]
            }]
        };

        let ui = <Spinner />;
        if (!this.props.loading) {
            ui = (
                <div className={classes.home}>
                    <LargeCard>
                        <Bar data={data}
                            width={200}
                            height={50} />
                    </LargeCard>

                    <div className={classes.subcontent}>
                        <SmallCard>
                            <h2 style={{ fontWeight: '600', color: '#74405E', marginTop: '2rem', marginBottom: '2rem' }}>Year {this.props.year} Progress</h2>
                            <Doughnut data={donut_data}
                                width={195}
                                height={90} />

                        </SmallCard>

                        <SmallCard>
                            <div>
                                <h2 style={{ fontWeight: '600', color: '#74405E', marginBottom: '1rem' }}>Overview</h2>
                                <h4>Currently in <span className={classes.SpanHome}>{this.props.currentSemester}</span>, <span className={classes.SpanHome}>ICT and {this.props.studyPath}</span></h4>
                                <h4>Class <span className={classes.SpanHome}>{this.props.class}</span></h4>
                                <h4>Total ECs: <span className={classes.SpanHome}>{this.props.ectsAchieved}/{this.props.ecsAchievable}</span></h4>
                                <h4>Average Grade: <span className={classes.SpanHome}>{this.props.totalAverage.toFixed(2)}</span></h4>
                                <h4><span className={classes.SpanHome}>{this.props.nrOfDueCourses}</span> Overdue Courses</h4>
                                <h4><span className={classes.SpanHome}>{this.props.nrOfCoursesInCurrentSemester}</span> Courses To Complete This Semester</h4>
                                <h4>Percentile: <span className={classes.SpanHome}>{this.props.percentile}</span></h4>

                                <h2 style={{ fontWeight: '600', color: '#74405E', marginTop: '2rem', marginBottom: '1rem' }}>Important Actions</h2>
                                <h4>Complete BEC1 to follow BEC2</h4>
                                <h4>Enroll for a minor until <span className={classes.SpanHome}>20.06.2019</span></h4>
                            </div>
                        </SmallCard>
                    </div>
                </div>
            );
        }

        return ui;
    }
}

const mapStateToProps = state => {
    return {
        // graph data
        averagePerSemester: state.dashboard.averagePerSemester,
        previousYearAveragePerBlock: state.dashboard.previousYearAveragePerBlock,
        // overview
        studyPath: state.dashboard.studyPath,
        currentSemester: state.dashboard.currentSemester,
        class: state.dashboard.class,
        ecsAchievable: state.dashboard.ecsAchievable,
        ectsAchieved: state.dashboard.ectsAchieved,
        nrOfDueCourses: state.dashboard.nrOfDueCourses,
        nrOfCoursesInCurrentSemester: state.dashboard.nrOfCoursesInCurrentSemester,
        percentile: state.dashboard.percentile,
        totalAverage: state.dashboard.totalAverage,
        year: state.dashboard.year,
        // page state
        loading: state.dashboard.loading,
        error: state.dashboard.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadDashboardData: () => dispatch(actions.loadDashboardData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
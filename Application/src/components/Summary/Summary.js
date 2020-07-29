import React from 'react';
import SmallCard from '../Cards/SmallCard/SmallCard';
import classes from './Summary.css';
import Spinner from '../../components/UI/Spinner/Spinner';

const summary = (props) => {
    let summary = <Spinner />;
    if (!props.loading) {
        summary = props.data.map(el => {
            let name = el.id.split('Y');
            return (
                <SmallCard key={el.id}>
                    <h2 style={{ fontWeight: '600', color: '#74405E', marginBottom: '2rem' }}>
                        {name[0].charAt(0).toUpperCase() + name[0].substring(1) + " Y" + name[1]}
                    </h2>
                    <h4>ECs Achieved: <span className={classes.SpanSummary}>{el.ectsAchieved}</span></h4>
                    <h4>Total ECs: <span className={classes.SpanSummary}>{el.ectsAchievable}</span></h4>
                    <h4>Average Grade: <span className={classes.SpanSummary}>{el.averageGrade}</span></h4>
                    <h4>Completed: <span className={classes.SpanSummary}>{el.completed}% </span></h4>
                </SmallCard>
            )
        });
    }

    return <div className={classes.container}>{summary}</div>;
};

export default summary;
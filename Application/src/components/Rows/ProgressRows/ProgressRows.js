import React from 'react';
import Row from '../Row/Row';

const progressRows = (props) => {
    let data = props.array.map(el => {
        return (
            <Row key={el.courseCode}>
                <div>{el.courseCode}</div>
                <div style={{ textDecoration: 'none', color: '#74405E', cursor: 'pointer' }}>
                    {el.courseName}
                </div>
                <div>{el.semester}</div>
                <div>{el.result.grade.value}</div>
                <div>{el.eCs}</div>
                <div>{el.status}</div>
            </Row>);
    });

    return (
        <div style={{ padding: '1rem' }}>
            {data}
        </div>
    );
}

export default progressRows;
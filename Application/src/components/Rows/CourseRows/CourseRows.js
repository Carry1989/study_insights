import React from 'react';
import Row from '../Row/Row';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const courseRows = (props) => {
    let data = props.array.map(el => {
        let course = el;
        return (
            <Row key={el.courseCode}>
                <div>{el.courseCode}</div>
                <div>
                    <Link to={{
                        pathname: "/description/" + el.courseCode,
                        state: {
                            data: course
                        }
                    }}
                        style={{ textDecoration: 'none', color: '#74405E' }}>
                        {el.courseName}
                    </Link>
                </div>
                <div>{el.semester}</div>
                <div>{el.blocks[0]}<br />{el.blocks[1]}</div>
                <div>{el.eCs}</div>
                <div>{el.isEligible ? 'Eligible' : 'Not Eligible'}</div>
            </Row>
        );
    });

    return (
        <div style={{ padding: '.5rem' }}>
            {data}
        </div>
    );
}

export default withRouter(courseRows);
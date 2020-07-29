import React from 'react';
import { withRouter } from 'react-router-dom';
import InnerNavItem from './InnerNavItem/InnerNavItem';

const innerNavItems = (props) => {
    return (
        <ul>
            {props.array.map(el => <InnerNavItem key={el.id} link={props.match.url + el.link}>{el.text}</InnerNavItem>)}
        </ul>
    );
};

export default withRouter(innerNavItems);
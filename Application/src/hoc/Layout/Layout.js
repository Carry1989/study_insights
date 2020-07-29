import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Menu from '../../components/Navigation/Menu/Menu';

class Layout extends Component {

    render(){

        let layout = (
            <div className={classes.Content}>
                <Menu />
                <main className={classes.Main}>
                    <Toolbar title = {this.props.title} logOut={this.props.logOut}/>
                    {this.props.children}
                </main>
            </div>
        );

        // if the user is not logged in, send to log in page
        if(!this.props.auth){
            layout = <div>{this.props.children}</div>;
        }

        return layout;
    }
}

export default withRouter(Layout); 
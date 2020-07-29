import React, { Component } from 'react';
import Logo from '../../components/UI/Logo/Logo';
import classes from './Auth.css';
import image from '../../assets/images/auth.jpg';

class Auth extends Component {

    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.ImageContainer}>
                    <img src={image} alt="Study Insights" className={classes.Image} />
                </div>
                <div className={classes.Menu}>
                    <Logo />
                    <p>Sign in with your Fontys account</p>
                    <form>
                        <input placeholder="PCN@student.fontys.nl" type="email" className={classes.Input} />
                        <input placeholder="Password" type="password" className={classes.Input} />
                        <button type="submit" onClick={this.props.click} className={classes.Btn}>Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default Auth;
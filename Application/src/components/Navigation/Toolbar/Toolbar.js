import React from 'react';
import classes from './Toolbar.css';
import sharepoint from '../../../assets/images/sharepoint.png';
import canvas from '../../../assets/images/canvas.png';
import mail from '../../../assets/images/mail.png';
import git from '../../../assets/images/git.png';

const toolbar = (props) => {
    return (
        <header>
            <nav className={classes.toolbar}>
                <p className={classes.toolbar__title}>{props.title}</p>

                <div className={classes.toolbar__img__box}>
                    <button className={classes.toolbar__img__btn}>
                        <a target="_blank" rel="noopener noreferrer" href="https://login.fhict.nl/adfs/ls?version=1.0&action=signin&realm=urn%3AAppProxy%3Acom&appRealm=1984e143-ba67-e711-837f-005056a77cc4&returnUrl=https%3A%2F%2Fportal.fhict.nl%2Fes%2FSitePages%2FHome.aspx&client-request-id=2A5A3568-D2D2-0002-3EB6-D42AD2D2D401">
                            <img className={classes.toolbar__img} src={sharepoint} alt="SharePoint Logo" />
                        </a>
                    </button>

                    <button className={classes.toolbar__img__btn}>
                        <a target="_blank" rel="noopener noreferrer" href="https://fhict.instructure.com/">
                            <img className={classes.toolbar__img} src={canvas} alt="Canvas Logo" />
                        </a>
                    </button>

                    <button className={classes.toolbar__img__btn}>
                        <a target="_blank" rel="noopener noreferrer" href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000006-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dylVXBbHZc03zAiPrqDBpZTnJT1RfeE3RtxZTOX-ummXlg_THRELrc-jZCHEFxkz16tnWrs5HXxygEZYNun61MVqP4KBfK6KCSA67xhBU0mmOKLMjQwajeqrBedAJPw5wVKvDpjX8wydZJzJCUStM-w&nonce=636859319190207639.YTI4ZmI4NTgtYmZkZi00MTc3LWI3N2YtMzNmYzZjYzA5MTliNWM0OGQ4MTktZmM3Yy00OTNjLThlYjUtYWU0NTY3ODZmMzAx&redirect_uri=https%3a%2f%2fportal.office.com%2flanding&ui_locales=en-GB&mkt=en-GB&client-request-id=29d07d6f-6203-4a83-92d3-1d45affdd01c">
                            <img className={classes.toolbar__img} src={mail} alt="Email Logo" />
                        </a>
                    </button>

                    <button className={classes.toolbar__img__btn}>
                        <a target="_blank" rel="noopener noreferrer" href="https://login.fhict.nl/adfs/ls/?SAMLRequest=fZHNboMwEIRfxTefiIFAIixAQokqRUqrKml76KUyYBKrxqbepT9vX5OqStpDrqtvZmd2cxC9Hng14tHs5NsoAUkFIB0qa1bWwNhLt5fuXTXycbct6BFxAM7YQeGsO6oGZ0az0QuACW%2FCJj%2FWCK1r0bxSsvaGyojJ7azV9qDMWS3aDpgGRslmXdCXZd3JeVq3wTxMwiBJsjCo2zQN2ihbZFG3TOJYeBRglBsDKAwWNA6jLAjTIAof4ohHEY8Xz5Q8%2BVSnxfEspOSz1wb4lK%2BgozPcClDAjeglcGz4vrrdcg9y8Vv%2FUjJc1wzOom2spmU%2B0fyUzpVT4X%2B3ytklkP%2Bc%2F84bbtb3Vqvmi1Ra24%2BVkwJlQdGNkpIb63qB1yNME9UG3Qnlw1QdUBqkrPzZ%2BffL5Tc%3D">
                            <img className={classes.toolbar__img} src={git} alt="Git Logo" />
                        </a>
                    </button>
                </div>

                <button className={classes.toolbar__btn} onClick={props.logOut}>Log Out</button>
            </nav>
        </header>
    );
}

export default toolbar;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LargeCard from '../../components/Cards/LargeCard/LargeCard';
import ProfileRow from '../../components/Rows/ProfileRow/ProfileRow';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/profile';

class Profile extends Component {

    componentDidMount() {
        this.props.onLoadProfileData();
    }

    render() {
        let displayData = this.props.loading ? <Spinner /> : null;
        let error = this.props.error ? <h3>Error loading profile data.</h3> : null;

        if (!this.props.loading) {
            displayData = this.props.profileData.map(d => {
                return <ProfileRow key={d.id}
                    columnName={d.colName}
                    columnValue={d.colValue} />
            });
        }

        return (
            <LargeCard>
                {displayData}
                {error}
            </LargeCard>
        );
    }
}

const mapStateToProps = state => {
    return {
        profileData: state.profile.profileData,
        loading: state.profile.loading,
        error: state.profile.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadProfileData: () => dispatch(actions.loadProfileData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile); 

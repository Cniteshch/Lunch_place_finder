import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class HeaderTemplate extends Component {
    render() {
        return (
            <div>
                <nav className="navbar ">
                    <div className="container">
                        <div className="navbar-header">
                            <Link className="navbar-brand logo" to='/'>Lunchplace</Link>
                        </div>
                    </div>
                </nav>
                  </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        myprofileimages: state.user.myprofileimages,
        myprofile: state.user.myprofile,
        headerActive: state.user.headerActive
    };
}

export default connect(mapStateToProps, {  })(HeaderTemplate);
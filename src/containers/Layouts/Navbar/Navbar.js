import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doLogout } from '../../App/actions';


class Navbar extends Component {
  state ={
  }
  render() {
    return(
      <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
        
      </header>    
    )
  }
}

// export default Navbar;
const mapStateToProps = store => {
  const {
    token,
    user,
  } = store.get('auth');

  return {
    token,
    user,
  };
};
const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(doLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
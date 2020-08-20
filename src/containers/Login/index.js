import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
// import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
// import reducer from './reducer';
import saga from './saga';
import { doLogin } from '../App/actions';
import { push } from 'connected-react-router'
import { toast } from 'react-toastify';

class LoginPage extends Component {
  state = {}
  componentDidMount() {
  }  
  
  
  render() {
    return (
      <div className="container-scroller">
       
      </div>
  
    )
  }
}


const mapStateToProps = ({ auth }) => {
  console.log("mapStateToProps", auth);
  return {
   
  };
};
const mapDispatchToProps = dispatch => ({
  requestLogin: (evt, cb) => dispatch(doLogin(evt, cb)),
  push
});


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  // withReducer,
  withSaga,
  withConnect,
)(LoginPage);

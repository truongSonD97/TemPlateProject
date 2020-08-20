import React, { Component } from "react";
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import ScrollToTop from './ScrollToTop';
import Router from './Router';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <ScrollToTop>
        <ToastContainer/>
        <Helmet>
          <title>Congero</title>
          <meta name="description" content="Congero Application" />
        </Helmet> 
        <Router />
      </ScrollToTop>
    );
  }
}

// export default App;
const withSaga = injectSaga({ key: 'rootSaga', saga });

export default compose(
  withSaga,
)(App);

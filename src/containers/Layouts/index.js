import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar/Navbar';

class Layout extends Component {
  layoutRef = React.createRef();
  state = {
    sidebar: true 
  }
  toggleSidebar = ()=> {
    const { sidebar } = this.state
    this.setState({sidebar: !sidebar});
  }
  render() {
    const { sidebar } = this.state;
    const classNames = sidebar ? 'container-scroller' : 'container-scroller sidebar-icon-only'
    return (
      <div className={classNames}>
        <Navbar />
        <section id="main" className="wrapper">
          <div className="container">
              {this.props.children}
          </div>
        </section>
      </div>
    )
  }
}

// export default Layout;
export default connect(state => ({
  sidebar: {},
}))(Layout);

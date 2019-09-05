import React, { Component } from 'react';

import ModalView from '../containers/ModalView/ModalView';
import MainView from '../containers/MainView/MainView';

class Dashboard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <MainView>
        <h1>React Modal</h1>
        <ModalView show={this.state.show} handleClose={this.hideModal} />
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </MainView>
    );
  }
}

export default Dashboard;
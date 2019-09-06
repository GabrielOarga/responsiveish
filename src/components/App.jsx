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
    const logo = document.querySelectorAll('#splash-logo path');
    console.log('logo: ', logo);

    logo.forEach((entry) => {
      console.log('Letter is', entry.getTotalLength());
    });

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
import React, { Component } from 'react';

import ModalView from '../containers/ModalView/ModalView';

class App extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>Open Me Baby</h1>
        <ModalView show={this.state.show} handleClose={this.hideModal} />
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Header/Header.jsx';
import Gallery from '../components/Gallery/Gallery.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
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
        <ModalView show={this.state.show} handleClose={this.hideModal}>
          <Header />
          <Sidebar />
          <Gallery />
        </ModalView>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </MainView>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);
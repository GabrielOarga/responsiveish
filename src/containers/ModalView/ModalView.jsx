import React from 'react';

import Header from '../../components/Header/Header.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

import './style.less';
import Splash from '../../components/Splash/Splash';

const ModalView = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal-background display-block' : 'modal-background display-block';

  return (
    <div className={showHideClassName}>
      <section className="modal">
        <Header>
          <button onClick={() => {console.log('hi'); handleClose()}}>back</button>
        </Header>
        <Sidebar />
        <Gallery />
        <Splash show />
      </section>
    </div>
  );
};

export default ModalView;
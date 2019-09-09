import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from "../../components/Navbar/Navbar";
import GalleryView from "../GalleryView/GalleryView";
import ProductView from "../ProductView/ProductView";

import './style.less';

const ModalView = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal-background display-block' : 'modal-background display-block';

  return (
    <div className={showHideClassName}>
      <section className="modal">
        <Router>
          <Navbar>
            <button onClick={() => {console.log('hi'); handleClose()}}>back</button>
          </Navbar>
          <Switch>
            <Route exact path="/gallery" component={GalleryView}/>
            <Route path="/product" component={ProductView} />
          </Switch>
        </Router>
      </section>
    </div>
  );
};

export default ModalView;
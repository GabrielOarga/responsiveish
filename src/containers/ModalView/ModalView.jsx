import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Navbar from '../../components/Navbar/Navbar';
import GalleryView from '../GalleryView/GalleryView';
import ProductView from '../ProductView/ProductView';

import { createBrowserHistory } from 'history';

import './style.less';

const ModalView = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal-background display-block' : 'modal-background display-none';
  const history = createBrowserHistory();
  return (
    <div className={showHideClassName}>
      <section className="modal">
        <Navbar>
          <button onClick={() => {console.log('hi'); handleClose()}}>close</button>
          <button onClick={() => {console.log('hi'); history.goBack()}}>back</button>
        </Navbar>
        <div className={'box-box'} />
        <Route render={({ location, history }) => {console.log(history); return (
          <>
            <TransitionGroup className={'transition-group'}>
              <CSSTransition
                key={location.key}
                classNames="item"
                timeout={500}
              >
                <Switch location={location}>
                  <Route exact path="/gallery" component={GalleryView} />
                  <Route exact path="/product" component={ProductView} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </>
        )}}
        />
      </section>
    </div>
  );
};

export default ModalView;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Navbar from '../../components/Navbar/Navbar';
import GalleryView from '../GalleryView/GalleryView';
import ProductView from '../ProductView/ProductView';
import EditorView from '../EditorView/EditorView';

import { createBrowserHistory } from 'history';

import './style.less';

const ModalView = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal-background display-block' : 'modal-background display-none';
  const history = createBrowserHistory();
  return (
    <div className={showHideClassName}>
      <section className="modal">
        <Navbar>
          <button onClick={() => {console.log('close'); handleClose()}}>close</button>
          <button onClick={() => {console.log('go back'); history.goBack()}}>back</button>
        </Navbar>
        <Route render={({ location }) => { return (
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
                  <Route exact path="/editor" component={EditorView} />
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
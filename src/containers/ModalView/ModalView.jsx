import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Navbar from '../../components/Navbar/Navbar';
import GalleryView from '../GalleryView/GalleryView';
import ProductView from '../ProductView/ProductView';

import { createBrowserHistory } from 'history';

import './style.less';
import Splash from '../../components/Splash/Splash';

const ModalView = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal-background display-block' : 'modal-background display-none';
  const history = createBrowserHistory();
  return (
    <div className={showHideClassName}>
      <section className="modal">
        {/*<Splash show />*/}
        <Navbar>
          <button onClick={() => {console.log('hi'); handleClose()}}>close</button>
          <button onClick={() => {console.log('hi'); history.goBack()}}>back</button>
        </Navbar>
        <Route render={({ location, history }) => {console.log(history); return(
          <>
            <Route exact path="/" render={() => (
              <Redirect to="/gallery" />
            )}
            />
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
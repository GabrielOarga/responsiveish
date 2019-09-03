import React from 'react';

import './style.less';

const ModalView = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={() => {console.log('hi'); handleClose()}}>close</button>
      </section>
    </div>
  );
};

export default ModalView;
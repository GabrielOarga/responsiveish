import React from 'react';

import './style.less';

// eslint-disable-next-line react/prop-types
const Item = ({index, itemClicked}) => {
  return (
    <div className={'gallery-item'} onClick={() => itemClicked(index)}>
      item {index}
    </div>
  )
};

export default Item;
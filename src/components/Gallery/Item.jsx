import React from 'react';

import './style.less';

const Item = ({index}) => {
  return (
    <div className={'gallery-item'}>
      item {index}
    </div>
  )
};

export default Item;
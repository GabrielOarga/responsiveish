import React from 'react';

import Item from './Item';

import './style.less';

const Gallery = () => {
  const items = getItems(40);

  return (
    <div className={'gallery'}>
      {items}
    </div>
  )
};

const getItems = (count) => {
  let items = [];

  for (let i = 0; i < count; ++i) {
    items.push(React.createElement(Item, {index: i}));
  }

  return items;
};

export default Gallery;
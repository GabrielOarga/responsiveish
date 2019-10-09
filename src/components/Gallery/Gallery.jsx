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
    items.push(React.createElement(Item, {key: `item-${i}`, index: i, itemClicked: index => handleItemClicked(index)}));
  }

  return items;
};

const handleItemClicked = index => {
  console.log(`Item no. ${index} clicked`);


};

export default Gallery;
import React from 'react';
import { useHistory } from 'react-router-dom'

import Item from './Item';

import './style.less';

const Gallery = () => {
  const history = useHistory();
  const items = getItems(40, history);

  return (
    <div className={'gallery'}>
      {items}
    </div>
  )
};

const getItems = (count, history) => {
  let items = [];

  for (let i = 0; i < count; ++i) {
    items.push(React.createElement(Item, {key: `item-${i}`, index: i, itemClicked: index => handleItemClicked(index, history)}));
  }

  return items;
};

const handleItemClicked = (index, history) => {
  console.log(`Item no. ${index} clicked`);
  history.push('/editor');
};

export default Gallery;
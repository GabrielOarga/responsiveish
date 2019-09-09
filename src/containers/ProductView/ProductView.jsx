import React from 'react';

import Gallery from '../../components/Gallery/Gallery.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

import './style.less';

const ProductView = ({children}) => {
  return (
    <div className={'product-view'}>
      <Sidebar />
      <Gallery />
    </div>
  )
};

export default ProductView;
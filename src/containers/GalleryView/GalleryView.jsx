import React from 'react';

import Gallery from '../../components/Gallery/Gallery.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

import './style.less';

const GalleryView = ({children, history}) => {
  return (
    <div className={'gallery-view'}>
      <Sidebar />
      <Gallery />
    </div>
  )
};

export default GalleryView;
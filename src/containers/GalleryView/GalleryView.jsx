import React from 'react';

import Gallery from '../../components/Gallery/Gallery.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

import './style.less';

const GalleryView = ({history}) => {
  return (
    <>
      <div className={'box-box'} />
      <div className={'gallery-view'}>
        <Sidebar />
        <Gallery history={history} />
      </div>
    </>
  )
};

export default GalleryView;
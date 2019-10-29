import React from 'react';

import { Toolbar, StyleboardPanel, EditorPanel } from '../../components/Editor';

import './style.less';

const EditorView = () => {
  return (
    <div className={'editor-view'}>
      <Toolbar />
      <div className={'flex-container'}>
        <StyleboardPanel />
        <EditorPanel />
      </div>
    </div>
  )
};

export default EditorView;
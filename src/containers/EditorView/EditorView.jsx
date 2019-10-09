import React from 'react';

import { Toolbar, StyleboardPanel, EditorPanel } from '../../components/Editor';

import './style.less';

const EditorView = () => {
  return (
    <div className={'editor-view'}>
      <Toolbar />
      <StyleboardPanel />
      <EditorPanel />
    </div>
  )
};

export default EditorView;
import React from 'react';

const Content = ({children, expanded}) => {

  const className = expanded ? 'content scrollable expanded' : 'content scrollable collapsed';

  return (
    <div className={className}>
      {children}
    </div>
  )
};

export default Content;
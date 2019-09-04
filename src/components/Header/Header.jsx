import React from 'react';

import './style.less';

const Header = ({children}) => {
  return (
    <div className={'navbar'}>
      {children}
      Navbar
    </div>
  )
};

export default Header;
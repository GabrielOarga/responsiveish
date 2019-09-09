import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.less';

const routes = [
  { to: '/gallery', label: 'Gallery' },
  { to: '/product', label: 'Product' }
];

const Navbar = ({children}) => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to}>{label}</NavLink>}
  );

  return (
    <div className={'navbar'}>
      { children }
      <nav>{ links }</nav>
    </div>
  )
};

export default Navbar;
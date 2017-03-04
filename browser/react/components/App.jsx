import React from 'react';
import NavbarContainer from '../containers/NavBarContainer';

export default function App ({children}) {
  return (
    <div>
      <NavbarContainer />
      { children }
    </div>
  );
}

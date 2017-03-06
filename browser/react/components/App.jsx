import React from 'react';
import NavbarContainer from '../containers/NavBarContainer';
import ModalRootContainer from '../modals/ModalRootContainer';

export default function App ({children}) {
  return (
    <div>
      <NavbarContainer />
        { children }
      <ModalRootContainer />
    </div>
  );
}

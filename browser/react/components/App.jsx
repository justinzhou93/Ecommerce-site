import React from 'react';
import NavbarContainer from '../containers/NavBarContainer';
import FilterBarContainer from '../containers/FilterBarContainer'

export default function App ({children}) {
  return (
    <div>
      <NavbarContainer />
      {/*<FilterBarContainer />*/}
      { children }
    </div>
  );
}

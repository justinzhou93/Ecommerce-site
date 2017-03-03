import React from 'react';
import NavbarContainer from '../containers/NavBarContainer';
import FilterBarContainer from '../containers/FilterBarContainer'

export default function App ({children}) {
  return (
    <div>
      <h3>NAVBAR is here</h3>
      {/*<NavbarContainer />*/}
      {/*<FilterBarContainer />*/}
      { children }
    </div>
  );
}

import React from 'react';
import NavbarContainer from '../containers/NavBarContainer';
import FilterBarContainer from '../containers/FilterBarContainer'

const Root = ({children}) => (
  <div>
    <NavbarContainer />
    <FilterBarContainer />
    { children }
  </div>
)

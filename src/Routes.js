import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Items from './Items';
import SpecificItem from './SpecificItem';



function Routes() {
  return (
    <Switch>
      <Route exact path='/products/:id'>
        <SpecificItem />
      </Route>
      <Route exact path='/'>
          <Items />
        </Route>
    </Switch>
  )
}

export default Routes;
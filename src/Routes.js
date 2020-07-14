import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Items from './Items';
import { Cart } from './Cart';
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
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  )
}

export default Routes;
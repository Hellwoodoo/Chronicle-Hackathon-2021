import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect, useLocation } from 'react-router-dom';
import { Main } from './components/Main';
import { Result } from './components/Result';



function App() {
  return (
    <div className='app-container'> 
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/Result" component={Result} />

        </Switch>
      </BrowserRouter>              
    </div>
  )
}
export default App;

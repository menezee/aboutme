import React, {lazy} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import withSuspense from './withSuspense';

const Aboutme = lazy(() => import('./Aboutme'));
const Doing = lazy(() => import('./Doing'));
const Contact = lazy(() => import('./Contact'));

const contentContainerStyle = {
  textAlign: 'center',
  paddingTop: '15px',
  display: 'flex',
  justifyContent: 'center',
};

function App() {
  return (
    <BrowserRouter>
      <>
        <Header/>
        <div style={contentContainerStyle}>
          <div style={{ width: '400px' }}>
            <Switch>
              <Route exact path='/aboutme' component={withSuspense(Aboutme)}/>
              <Route exact path='/doing' component={withSuspense(Doing)}/>
              <Route exact path='/contact' component={withSuspense(Contact)}/>
            </Switch>
          </div>
        </div>
      </>
    </BrowserRouter>
  )
}

export default App;

import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter} from "react-router-dom"
import {Services, servicespath } from './pages/services/services.presenter'
import { providerpath, Fees } from './pages/fees/fees.presenter';
import { homepath, Home } from './pages/home/home.presenter';
import { Contact, contactpath } from './pages/contact/contact.presenter'; 
import { Notfound } from './pages/notfound/notfound.view';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={homepath}>
          <Home />
        </Route>
  
        <Route path={providerpath}>
          <Fees />
        </Route>
  
        <Route path={contactpath}>
          <Contact />
        </Route>
  
        <Route path={servicespath}>
          <Services />
        </Route>

        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    </BrowserRouter>
    )
}
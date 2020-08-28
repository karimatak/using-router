import React from 'react';
import './App.css';
import Nav from './Common_Components/Nav'
import Home from './Components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import ContinentsList from './Components/ContinentsList'
import CountriesList from './Components/CountriesList'
import EventsList from './Components/EventsList'

import {CountryProvider} from './Context/CountryContext';
import {ContinentProvider} from './Context/ContinentContext'
import {EventProvider} from './Context/EventsContext'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="container">
        <Switch>
        <CountryProvider>
          <ContinentProvider>
            <EventProvider>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={EventsList}/>
          <Route path="/continents" component={ContinentsList}/>
          <Route path="/countries" component={CountriesList}/>
            </EventProvider>
          </ContinentProvider>
        </CountryProvider>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

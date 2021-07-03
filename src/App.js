import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { UserProvider } from './UserContext'
import home from './containers/Home'
import Login from './containers/Login'
import Callback from './containers/Callback';
import scoring from './containers/Scoring'
import dashContainer from './containers/DashContainer'
import about from './components/About'

export default function App() {

  const handleCallback = ({location}) => {
    return <Callback location={location}/>
  }

  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path="/callback" component={handleCallback} />
          <Route exact path='/dashboard' component={dashContainer}/>
          <Route exact path='/scoring' component={scoring}/>
          <Route exact path='/about' component={about}/>
        </Switch>
      </Router>
  );
}
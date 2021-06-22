import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import home from './containers/Home'
import login from './containers/Login'
import signup from './containers/Signup'
import scoring from './containers/Scoring'
import stats from './containers/Stats'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={home}/>
        <Route exact path='/login' component={login}/>
        <Route exact path='/signup' component={signup}/>
        <Route exact path='/scoring' component={scoring}/>
        <Route exact path='/stats' component={stats}/>
      </Switch>
    </Router>
  );
}

export default App;

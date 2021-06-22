import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1><i>Taylor Swift Rankings</i></h1>
        </header>
      </div>
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

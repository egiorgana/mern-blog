import React from 'react';
import '../index.css';
import { Switch, Route } from 'react-router-dom';
import About from './about/index'
import Login from './RegisterLogin'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  )
}

export default App;

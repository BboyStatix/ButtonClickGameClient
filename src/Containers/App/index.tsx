import React, {FC} from 'react';
import Client from "../Client";
import Dashboard from "../Dashboard";
import {
    Switch,
    Route, BrowserRouter as Router,
} from "react-router-dom"
import './index.css'

const App: FC = () => {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/client">
                      <Client />
                  </Route>
                  <Route path="/dashboard">
                      <Dashboard />
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;

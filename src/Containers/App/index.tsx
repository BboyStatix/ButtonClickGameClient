import React, {FC} from 'react';
import Client from "../Client";
import Dashboard from "../Dashboard";
import {
  Switch,
  Route,
} from "react-router-dom"
import './index.css'

const App: FC = () => {
  return (
      <div className="App">
          <Switch>
              <Route path="/client">
                  <Client />
              </Route>
              <Route path="/dashboard">
                  <Dashboard />
              </Route>
          </Switch>
      </div>
  );
}

export default App;

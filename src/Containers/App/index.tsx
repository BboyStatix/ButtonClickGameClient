import React, {FC} from 'react';
import Client from "../Client";
import Dashboard from "../Dashboard";
import {
  Switch,
  Route,
} from "react-router-dom"

const App: FC = () => {
  return (
      <Switch>
          <Route path="/client">
              <Client />
          </Route>
          <Route path="/dashboard">
              <Dashboard />
          </Route>
      </Switch>
  );
}

export default App;

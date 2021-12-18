import "./App.css";
import Login from "./component/Login";
import { Register } from "./component/Register";
import Dashboard from "./component/Dashboard";
import NoMatchPage from "./component/NoMatchPage";
import { Switch } from "react-router";

import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="*">
              <NoMatchPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Login from "./component/login";
import Register from "./component/register";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
           <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

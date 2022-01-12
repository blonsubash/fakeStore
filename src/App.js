import Login from "./components/login";
import Registration from "./components/register";
import "./assets/css/common.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={"/"}>
            <Login />
          </Route>
          <Route path={"/registration"}>
            <Registration />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

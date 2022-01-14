import Login from "./components/login";
import Registration from "./components/register";
import Dashboard from "./components/dashboard";
import "./assets/css/common.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/productdetails";
import { Navbar } from "reactstrap";
import SpecificCategory from "./components/specificcategory";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={"/"}>
            <Login />
          </Route>
          <Route exact path={"/registration"}>
            <Registration />
          </Route>
          <Route exact path={"/dashboard"}>
            <Dashboard />
          </Route>
          <Route exact path={"/productdetails"}>
            <ProductDetails />
            {/* <SpecificCategory /> */}
          </Route>
          {/* <Route exact path={"/specificcategory"}>
            <ProductDetails />
            <SpecificCategory />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

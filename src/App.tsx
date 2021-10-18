import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/nav";
import AddDoc from "./pages/addDoc";
import AddWebPage from "./pages/addWebPage";
import SearchPage from "./pages/search";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/addwebpage">
          <AddWebPage />
        </Route>
        <Route path="/adddoc">
          <AddDoc />
        </Route>
        <Route path="/">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

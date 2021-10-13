import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddDoc from "./pages/addDoc";
import AddWebPage from "./pages/addWebPage";
import SearchPage from "./pages/search";

function App() {
  return (
    <Router>
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

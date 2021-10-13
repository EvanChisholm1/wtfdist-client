import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddDoc from "./pages/add";
import SearchPage from "./pages/search";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
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

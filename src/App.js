import Header from "./Components/Header";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Blogdetails from "./Components/Blogdetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <Blogdetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

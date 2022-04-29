import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import BookTickets from "./components/BookTickets";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search/:id">
          <BookTickets />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;

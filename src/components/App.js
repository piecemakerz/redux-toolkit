import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
      <Redirect path="*" to="/"></Redirect>
    </Router>
  );
}

export default App;

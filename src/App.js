import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import ToDo from "./components/ToDo/ToDo";
import Signin from "./components/SignFrom/Signin/Signin";
import Signup from "./components/SignFrom/Signup/Signup";
import EditUser from "./components/EditUser/EditUser";
import Users from "./components/Users/Users";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="user/edit">
          <EditUser />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import About from "./pages/About/About";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

import UserContext from "./utils/UserContext"

function App() {

  const [_userState, _setUserSate] = useState({
    isLoggedIn: false,
    uId: null,
    email: null
  })

  return (
    <Router>
      <UserContext.Provider value={_userState}>
        <NavTabs />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/login" component={LoginPage} />
        {/* <Route path="/contact" component={Contact} /> */}
      </UserContext.Provider>
    </Router>
  );
}

export default App;

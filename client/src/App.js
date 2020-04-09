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
    _isLoggedIn: false,
    _uId: null,
    _email: null
  })

  const updateUserState = (updates) => {
    _setUserSate({
      ..._userState,
      ...updates
    })
  }

  return (
    <Router>
      <UserContext.Provider value={{..._userState, handleUpdate: updateUserState}}>
        <NavTabs isLoggedIn={_userState._isLoggedIn} email={_userState._email} uid={_userState._uId} />
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

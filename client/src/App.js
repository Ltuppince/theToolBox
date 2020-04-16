import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import About from "./pages/About/About";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Portal from "./pages/PortalPage/Portal"
import UserContext from "./utils/UserContext"
import Directory from "./pages/DirectoryPage/Directory"
import LearnPage from "./pages/Learn/Learn"
import PoliciesPage from "./pages/Policies/Policies";

function App() {

  const [_userState, _setUserState] = useState({
    _isLoggedIn: false,
    _uId: null,
    _email: null,
    _data: null
  })

  const updateUserState = (updates) => {
    _setUserState({
      ..._userState,
      ...updates
    })
  }

  const fetchUserData = useCallback(async () => {
    const userData = await (await fetch("/api/users/data")).json()
    console.log(userData)
    _setUserState({
      ..._userState,
      _data: userData
    })
  }, [_userState])

  useEffect(() => {
    if (_userState._isLoggedIn) {
      fetchUserData()
    }
  }, [_userState._isLoggedIn])

  return (
    <Router>
      <UserContext.Provider value={{..._userState, handleUpdate: updateUserState}}>
        <NavTabs isLoggedIn={_userState._isLoggedIn} email={_userState._email} uid={_userState._uId} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/portal" component={Portal} />
        <Route exact path="/directory" render={() => <Directory employeeData={_userState._data} />}  />
        <Route exact path="/learn" component={LearnPage} />
        <Route exact path="/policies" render={() => <PoliciesPage policiesData={_userState._data} />} />
        {/* <Route path="/contact" component={Contact} /> */}
      </UserContext.Provider>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import { Axios } from "./utils/Axios";
import AccountList from "./components/AccountList";

import "./App.css";

function App() {
  const [accountList, setAccountList] = useState([]);

  //Get Accounts
  useEffect(() => {
    Axios()
      .get("/")
      .then((res) => setAccountList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <nav>
        <h1 className="app-header"> List Of Accounts </h1>
        <div className="nav-link">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/account-list">
            Accounts
          </NavLink>
        </div>
      </nav>
      <Route exact path="/" />
      <Route
        exact
        path="/account-list"
        render={(props) => <AccountList {...props} accountList={accountList} />}
      />
    </div>
  );
}

export default App;

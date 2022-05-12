import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
// import routing from './routes/router';

function App() {
  const [getLoginData, setGetLoginData] = useState([]);
  const [getSignupData, setgetSignupData] = useState([]);

  const getUserData = (userData) => {
    // console.log(userData);
    setGetLoginData(...getLoginData, userData);
  };

  const getUserSignupData = (userData) => {
    setgetSignupData(...getSignupData, userData);
    console.log(userData);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/login">
            <Login getUserData={getUserData} />
          </Route>
          <Route exact path="/signup">
            <Signup getUserSignupData={getUserSignupData} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

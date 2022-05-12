// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Users from "./components/Users";
import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      {/* <Users /> */}
      <Products />
    </div>
  );
}

export default App;

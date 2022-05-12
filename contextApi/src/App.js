// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import ComponentA from "./components/ComponentA";
import { UserProvider } from "./context/Context";
import ComponentD from "./components/ComponentD";
import { LoginProvider } from "./context/LoginContext";

function App() {
  const [uname, setuname] = useState("Google");

  let getDataFromComponentD = (data) => {
    console.log("data in parent",data);
  };
  
  const [loginData, setloginData] = useState({
    username: "Mukesh",
    getDataFromComponentD: getDataFromComponentD,
  });

  return (
    <div className="App">
      <UserProvider value={uname}>
        {/* <ComponentA uname={uname} /> */}
      </UserProvider>
      {/* <button
        onClick={() => {
          setuname("Flipkart");
        }}
      >
        Change name
      </button> */}

      <LoginProvider value={loginData}>
        <ComponentD />
      </LoginProvider>
    </div>
  );
}

export default App;

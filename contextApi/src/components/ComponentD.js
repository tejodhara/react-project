import React, { useContext } from "react";
import loginContext from "../context/LoginContext";

function ComponentD() {
  let context = useContext(loginContext);

  console.log("comp D  context", context);
  return (
    <div>
      <h1>Username : {context.username}</h1>
      <button
        onClick={() => {
          context.getDataFromComponentD("Hey from comp D");
        }}
      >
        Send data to parent
      </button>
    </div>
  );
}

export default ComponentD;

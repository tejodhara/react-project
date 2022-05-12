import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setusers] = useState([]);

  console.log("users", users);
  useEffect(() => {
    fetchUsers();
  }, []);

  let fetchUsers = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      let data = response.data;
      // console.log("response users",response.data);
      setusers(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      {users.map((user) => {
        return <h2 key={user.id}>{user.name}</h2>;
      })}
    </div>
  );
}

export default Users;

import React, { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import Login from "./Login";

function Home() {
  const { IsAuthDetail, logout } = useContext(AuthContext);

  console.log(IsAuthDetail)


  return (
    <div>
      <h1>Home Page</h1>

      {IsAuthDetail.isAuth ? (
        <div>
        <h3>Token: {IsAuthDetail.token}</h3>
        <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Login/>
      )}
    </div>
  );
}
export default Home;

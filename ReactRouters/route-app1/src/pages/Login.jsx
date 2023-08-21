import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import { Navigate } from "react-router-dom";

export default function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const { login, IsAuthDetail } = useContext(AuthContext);
  
// eve.holt@reqres.in
// cityslicka

  //reqres.in
  const handleLogin = async () => {
    const userDetail={email,password}
    try {
      const res = await fetch(`https://reqres.in/api/login`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetail)
      })
      const data=await res.json()
      // console.log(data)
      login(data.token)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(IsAuthDetail)

  if (IsAuthDetail.isAuth) {
    return <Navigate to={'/'}/>
  }

  return (
    <div>
      <h1>Login Page</h1>
      <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br />
      <br />
      <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

import React from "react";
import "./Homepage.css";

const Homepage = ({ setLoginUser }) => {
  //const user = localStorage.getItem("user");

  return (
    <div className="homepage">
      <h1>Admin Dashboard</h1>
      <p>Welcome </p>
      <div className="button" onClick={() => setLoginUser({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;

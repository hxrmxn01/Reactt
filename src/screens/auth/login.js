import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img

    src ="https://i.pinimg.com/enabled/564x/5d/ef/8c/5def8c3cff33b08ffcfd66c5fc725fc2.jpg"
        
        alt="Vibin-logo"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}

//https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png

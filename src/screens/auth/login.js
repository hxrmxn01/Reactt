import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://static.displate.com/324x454/displate/2020-07-08/819cc8db68869bdeeb1315ce3484a72f_3e8904392e0d0fba7c14b17acf7ce1ea.avif "
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

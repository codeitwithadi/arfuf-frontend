import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../images/icon1.png";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);

    await fetch("http://localhost:1337/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        console.log(data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
          <div className="merchant-sign-in text-center">
            <div>
              <img src={icon} alt="icon" />
              <h5 className="py-2">Sign in to your Merchant Account</h5>
            </div>
            <div className="merchant-login">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <span className="fa fa-envelope"></span>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email id / Phone number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <span className="fa fa-lock lock-icon"></span>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Account password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="reset-password">
                  <p>
                    Forgot you password ?<a href="/#"> Reset password</a>
                  </p>
                </div>
                <button className="btn btn-primary btn-edit-button px-5 my-3">
                  Sign in
                </button>
                <div className="reset-password">
                  <p>
                    Dont have an account ?<Link to={"/signup"}>Sign up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

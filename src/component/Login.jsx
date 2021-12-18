import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  console.log(email, passWord);
  return (
    <div className="row">
      <div className="col-lo-5 col-md-7 mx-auto">
        <div className="card border-success shadow-lg my-2">
          <div className="card-header border-bottom border-success">
            <h4
              style={{ fontSize: "40px" }}
              className="text-success text-center"
            >
              Login
            </h4>
          </div>
          <div className="card-body border-bottom border-success">
            <div className="form-group">
              <label className="mb-3" htmlFor="email">
                Email
              </label>
              <input
                autoCapitalize="off"
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="card-body border-bottom border-success">
            <div className="form-group mt-3">
              <label className="mb-3" htmlFor="passWord">
                PassWord
              </label>
              <input
                type="passWord"
                className="form-control"
                id="passWord"
                placeholder="Enter Your PassWord"
                name="passWord"
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

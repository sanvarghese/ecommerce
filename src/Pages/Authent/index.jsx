import React from "react";

import { useState } from "react";

import axios from "axios";

function Authentn(props) {
  // const [Step, setStep] = useState(2);

  const [data, setdata] = useState([]);
  const [dummyState, setDummyState] = useState({});

  function changedata(e) {
    // console.log({data})
    setdata({ ...data, [e.target.name]: e.target.value });
    setDummyState({ ...dummyState, [e.target.name]: e.target.value });
  }

  //   const setAuthToken = (token) => {
  //     if (token) {
  //       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //     } else delete axios.defaults.headers.common["Authorization"];
  //   };

  return (
    <>
      <section class="signup-section sp-pd-t">
        <div class="container">
          <div class="sign-up-box">
            <div class="sign-up-bottom">
              <h3>Authentication</h3>
              <form>
                <div class="sign-form-box">
                  <div class="sign-form-box-left">
                    <label for="phone">Email or mobile phone number</label>
                    <br></br> <br></br>
                    <input type="email" name="phone" />
                    <br></br> <br></br>
                    <input
                      type="checkbox"
                      id="checkbox"
                      onChange={props.Changedata}
                    />
                    <label for="phone">Remember Me </label>
                    <br></br> <br></br>
                  </div>
                  <div class="sign-form-box-right">
                    <label for="phone">Password</label>
                    <br></br> <br></br>
                    <input type="password" name="phone" />
                    <br></br> <br></br>
                  </div>
                </div>
                <p>
                  By continuing, you agree to shop indeedConditions of Use and{" "}
                  <a href="#">privacy Notice.</a>
                </p>
                <a href="/">
                  <input type="button" id="continue-btn" value="Login" />
                </a>
                <br></br> <br></br>
                <p class="red-text">Need Help</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Authentn;

import React from "react";
import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";

import { useState } from "react";

function Log() {
  // const [Step, setStep] = useState(2);

  return (
    <>
      <section class="signup-section sp-pd-t">
        <div class="container">
          <div class="sign-up-box">
            <div class="sign-up-bottom">
              <h3>Login</h3>
              <form>
                <div class="sign-form-box">
                  <div class="sign-form-box-left">
                    <label for="phone">Email or mobile phone number</label>
                    <br></br> <br></br>
                    <input type="email" name="phone" />
                    <br></br> <br></br>
                    <input type="checkbox" id="checkbox" />
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
                </p>{" "}
                <a href="/">
                  <input type="submit" id="continue-btn" value="Login" />
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

export default Log;

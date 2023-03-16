// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import {
  faHome,
  faShoppingBag,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from "../../utils/index";

function Value() {
  return (
    <div class="main-nav">
      <section class="g-navbar">
        <div class="g-nav">
          <div class="container">
            <div class="top-nav">
              <div class="logo">
                <a href="/">
                  <img src="/images/logo.jpg"></img>
                </a>
              </div>

              <div class="serch-bar">
                <input type="text" placeholder="Serch for products" />
              </div>

              <div class="cart-icons">
                <a href="/Login">
                  <FontAwesomeIcon icon={faUser} />
                </a>
                <a href="/Cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </div>
              <div class="login-btn-box">
                {/* <a href="sign-up.html">
                                    <input class="login-btn" type="button" value="Login" url="" />
                                </a> */}
                <a href="/Login">
                  <input
                    class="login-btn"
                    type="button"
                    value="Login"
                    url="/Login"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr class="seperated-line"></hr>
    </div>
  );
}

export default Value;

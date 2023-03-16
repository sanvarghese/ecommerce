import React from "react"
import Header from '../../../components/Header/index'
import Footer from '../../../components/Footer/index'
import { useState } from "react";


function Sign(props) {

    return (
        <>

            <section class="signup-section sp-pd-t">
                <div class="container">
                    <div class="sign-up-box">

                        <div class="sign-up-bottom">
                            <h3>Sign Up </h3>

                            <form>

                                <div class="sign-form-box">
                                    <div class="sign-form-box-left">
                                        <label for="phone">Email</label><br></br> <br></br>
                                        <input type="email" name="email" onChange={props.Changedata} /><br></br> <br></br>

                                        <label>First Name</label><br></br> <br></br>
                                        <input type="text" name="first_name" /><br></br> <br></br>

                                        <label>Password</label><br></br> <br></br>
                                        <input type="password" name="password" /><br></br> <br></br>
                                    </div>
                                    <div class="sign-form-box-right">
                                        <label for="phone">Phone Number</label><br></br> <br></br>
                                        <input type="number" name="phone_number" /><br></br> <br></br>

                                        <label for="text">Last Name</label><br></br> <br></br>
                                        <input type="text" name="last_name" /><br></br> <br></br>
                                        <label>Confirm Password</label><br></br> <br></br>
                                        <input type="password" name="confirm_password" /><br></br> <br></br>

                                    </div>
                                </div>
                                <p>By continuing, you agree to shop indeedConditions of Use and <a href="#">Privacy Notice.</a>
                                </p>
                                <input type="button" id="continue-btn" value="Continue" onClick={() => props.handleSubmit(2)} /><br></br> <br></br>
                                <p class="red-text">Need Help</p>
                            </form>
                            {/* <h2>{props.Email}</h2> */}
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default Sign;

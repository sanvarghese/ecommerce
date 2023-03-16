

import React from "react"
import Header from '../../../components/Header/index'
import Footer from '../../../components/Footer/index'
import Price from '../../../components/Price/index'
import Timebar from '../../../components/Timebar/index'


function Creditpyt(props) {

    return (
        <>
            <Timebar step={props.step}/>
                <div class="sub-bar-box">
                    <div class="select-address-bottom">
                        <div class="container">
                            <h3>Selected Payement Methed</h3>
                            <form>
                                <div class="form-delivery-box">
                                    <div class="left">
                                        <div class="form-delivery-box-inner">
                                            <ul class="payement-option">
                                                <a class="active" href="payment-credit.html">Credit Card</a>
                                                <a href="payment-upi.html">UPI</a>
                                                <a href="payment-cash.html">Cash on Delivery</a>
                                                <a href="#">Net Banking</a>
                                            </ul> 
                                            <label for="phone">Name on Card</label><br></br> <br></br>
                                            <input type="email" name="phone" /><br></br> <br></br>
                                            <label>Card Number</label><br></br> <br></br>
                                            <input type="text" name="" /><br></br> <br></br>
                                            <div class="input-yr-box">
                                                <div class="input-item">
                                                    <label for="phone">Month</label><br></br> <br></br>
                                                    <select name="" class="select-optiion">
                                                        <option value="">01</option>
                                                        <option value="">02</option>
                                                        <option value="">03</option>
                                                        <option value="">04</option>
                                                        <option value="">05</option>
                                                        <option value="">06</option>
                                                        <option value="">07</option>
                                                        <option value="">08</option>
                                                        <option value="">09</option>
                                                        <option value="">10</option>
                                                        <option value="">11</option>
                                                        <option value="">12</option>
                                                    </select>
                                                </div>
                                                <div class="input-item">
                                                    <label for="phone">Year</label><br></br> <br></br>
                                                    <select name="" class="select-optiion">
                                                        <option value="">2023</option>
                                                        <option value="">2022</option>
                                                        <option value="">2021</option>
                                                        <option value="">2020</option>
                                                        <option value="">2019</option>
                                                        <option value="">2018</option>
                                                        <option value="">2017</option>
                                                        <option value="">2016</option>
                                                    </select>
                                                </div>
                                                <div class="input-item">
                                                    <label for="phone">Cvv</label><br></br> <br></br>
                                                    <select name="" class="select-optiion">
                                                        <option value="">2012</option>
                                                        <option value="">2011</option>
                                                        <option value="">2010</option>
                                                        <option value="">2019</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="order-btn">
                                            <a href="#" class="placeto-order hvr-btn" onClick={()=>props.handleSubmit(4)}>Pay ₹1,499 </a>
                                        </div>
                                    </div>
                                    <Price />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Creditpyt;

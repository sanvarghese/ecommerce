

import React from "react"
import Header from '../../../components/Header/index'
import Footer from '../../../components/Footer/index'
import Price from '../../../components/Price/index'
import Timebar from '../../../components/Timebar/index'


function Cashpyt() {

    return (
        <>
            <Timebar/>
            <div class="select-address-bottom">
                <div class="container">
                    <h3>Selected Payement Methed</h3>

                    <form>
                        <div class="form-delivery-box">
                            <div class="left">
                                <div class="form-delivery-box-inner">

                                    <ul class="payement-option">
                                        <a href="payment-credit.html">Credit Card</a>
                                        <a href="payment-upi.html">UPI</a>
                                        <a class="active" href="payment-cash.html">Cash on Delivery</a>
                                        <a href="#">Net Banking</a>
                                    </ul>
                                    <div class="payement-radio">
                                        <div class="payement-option-top">
                                            <img src="images/icons/cach.png" />
                                            <input type="text" class="cach" value="Enter Charector" />

                                        </div>



                                    </div>
                                </div>

                                <div class="order-btn">
                                    <a href="#" class="placeto-order hvr-btn">Confirm Order</a>
                                </div>

                            </div>
                            <Price />

                        </div>

                    </form>

                </div>
            </div>



        </>
    );
}

export default Cashpyt;

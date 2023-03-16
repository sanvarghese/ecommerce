

import React from "react"
import Header from '../../../components/Header/index'
import Footer from '../../../components/Footer/index'
import Price from '../../../components/Price/index'
import Timebar from '../../../components/Timebar/index'
import {UPIOPTION} from "../../../utils/products";
// import { COLOR, DETAIL ,REVIEW ,MODELS } from "../../utils/products";


function Upipyt() {

    return (
        <>
            <Timebar />
            <div class="select-address-bottom">
                <div class="container">
                    <h3>Selected Payement Methed</h3>

                    <form>
                        <div class="form-delivery-box">
                            <div class="left">
                                <div class="form-delivery-box-inner">
                                    <ul class="payement-option">
                                        <a href="payment-credit.html">Credit Card</a>
                                        <a class="active" href="#">UPI</a>
                                        <a href="payment-cash.html">Cash on Delivery</a>
                                        <a href="#">Net Banking</a>
                                    </ul>
                                    <div class="payement-radio">
                                        <div class="payement-option-top">
                                            <div class="item">
                                                <input type="radio" id="html" name="fav_language" value="phonepe" />
                                                <label for="html">Phonepe</label><br></br>
                                            </div>
                                            <div class="item">
                                                <input type="radio" id="html" name="fav_language" value="Paytm" />
                                                <label for="html">Paytm</label><br></br>
                                            </div>
                                            <div class="item">
                                                <input type="radio" id="" name="fav_language" value="Google Pay" />
                                                <label for="html">Google Pay</label><br></br>
                                            </div>

                                        </div>

                                        {/* <div class="payement-option-bottom">
                                            <img src="images/icons/visa.png" />
                                            <img src="images/icons/rupay.png" />
                                            <img src="images/icons/razor.png" />
                                        </div> */}
                                        <div class="payement-option-bottom">
                                            {UPIOPTION.map((item3) => {
                                                return <img src={item3.img} />
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div class="order-btn">
                                    <a href="#" class="placeto-order hvr-btn">Continue</a>
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

export default Upipyt;

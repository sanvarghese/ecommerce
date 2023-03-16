

import React from "react"
import Header from '../../../components/Header/index'
import Footer from '../../../components/Footer/index'
import Price from '../../../components/Price/index'
import Timebar from '../../../components/Timebar/index'


function Creditpyt(props) {

    return (
        <>

            <Timebar step={props.step}/>
            <div class="select-address-bottom sp-pd-t">
                <div class="container">
                    <h3>Select a delivery address</h3>
                    <h6>Add a new address</h6>
                    <form>
                        <div class="form-delivery-box">
                            <div class="left">
                                <label for="phone">Full name</label><br></br> <br></br>
                                <input type="email" name="phone"/><br></br> <br></br>
                                <label>Address</label><br></br> <br></br>
                                <input type="text" name=""/><br></br> <br></br>
                                <label>Town/City</label><br></br> <br></br>
                                <input type="text" name=""/><br></br> <br></br>
                            </div>
                            <div class="left">
                                <label for="phone">Mobile number</label><br></br> <br></br>
                                <input type="number" name=""/><br></br> <br></br>
                                <label>State</label><br></br> <br></br>
                                <input type="text" name=""/><br></br> <br></br>
                                <label>Pincode</label><br></br> <br></br>
                                <input type="number" name=""/>
                            </div>
                        </div>
                        <div class="order-address-btn">
                            <a href="#" class=" delivery-order hvr-btn" onClick={()=>props.handleSubmit(3)}>Continue</a>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Creditpyt;

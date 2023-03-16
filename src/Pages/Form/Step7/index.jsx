import React from "react";
import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";
import Price from "../../../components/Price/index";
import Timebar from "../../../components/Timebar/index";

function Completepyt(props) {
  return (
    <>
      <Timebar step={props.step} />
      <div class="select-address-bottom">
        <div class="container">
          <h3>Complete payement</h3>

          <div class="complete-payment">
            <div class="complete-payment-inner">
              <div class="icon">
                <img src="images/icons/complet-icon.png" />
              </div>

              <h3>Order placed thank you</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p>Delivery by August 18, 2022</p>
            </div>

            <div class="order-btn">
              <a href="/" class="placeto-order hvr-btn">
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Completepyt;

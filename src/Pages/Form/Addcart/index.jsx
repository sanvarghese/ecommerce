import React from "react";

import { useState } from "react";
import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";
import { CARTITEM, PLACEORDER } from "../../../utils/products";

function Carts() {
  return (
    <>
      <Header />

      <section class="shop-cart-section sp-pd-t">
        <div class="container">
          <div class="shop-cart-box wow fadeInLeft animated">
            <div class="shop-cart-box-inner">
              <div class="shop-cart-outer">
                <h3>Shop Cart</h3>
                {CARTITEM.map((item3) => {
                  return (
                    <div class="shop-cart">
                      <div class="shop-item-image">
                        <img src={item3.imgcart} />
                      </div>
                      <div class="shop-item-detail">
                        <div class="edit-item">
                          <p>{item3.text1}</p>
                          <i
                            class="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </div>

                        <h6>{item3.titile1}</h6>
                        <p>{item3.titile2}</p>

                        <div class="offer">
                          <h6>{item3.titile3}</h6>
                          <h6 class="regular">
                            <span> {item3.titile4} </span>
                            {item3.titile5}
                          </h6>
                        </div>
                        <p>{item3.titile6}</p>

                        <select name="qnty" id="qnty">
                          {/* <option value="Qty">{item3.select1}</option> */}
                          <option value="1">{item3.select1}</option>
                          <option value="2">{item3.select2}</option>
                          <option value="3">{item3.select3}</option>
                        </select>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div class="price-details-outer">
                <h3>Price Details</h3>
                <div class="price-details-inner">
                  <div class="price-details">
                    <div class="charge">
                      <ul>
                        <li>Price (2 item)</li>
                        <li>Discount</li>
                        <li>Delivery Charges</li>
                        <li>Total Amount</li>
                      </ul>
                    </div>
                    <div class="amount">
                      <ul>
                        <li>₹1,499</li>
                        <li>− ₹1,200</li>
                        <li>free</li>
                        <li>₹299 </li>
                      </ul>
                    </div>
                  </div>
                  <div class="order-btn">
                    {PLACEORDER.map((item3) => {
                      return (
                        <a href={item3.url} class=" placeto-order hvr-btn">
                          Place to Order
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Carts;

// import React from "react";
// import { useState } from "react";
import React, { useEffect, useState } from "react";

import { OFFERS } from "../../utils";
import { BrandDeals } from "../../utils/products";
import Deals from "../Deals/index";

function Brand() {
  const [TopDeals, setTopDeals] = useState();

  useEffect(() => {
    const TopDealsFetch = async () => {
      const response = await fetch(
        `https://firestore.googleapis.com/v1/projects/e-commerce-90935/databases/(default)/documents/products`
      );
      const data = await response.json();
      setTopDeals(data?.documents);
    };
    TopDealsFetch();
  }, []);

  return (
    <>
      <section class="top-offer-section">
        <div class="container">
          <div class="top-offer">
            <div class="offer-text">
              <h3>Top Offer</h3>
            </div>
            <div class="offer-items-box wow fadeInLeft animated">
              {OFFERS.map((item) => {
                return (
                  <div class="items">
                    <img src={item.image} />
                    <div class="text">
                      <p> {item.title}</p>
                      <h6>{item.content}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section class="brand-section">
        <div class="container">
          <div class="brand-box">
            <div class="brand-text">
              <h3>Deals on Top Brand</h3>
            </div>
            <div class="item-box">
              {TopDeals &&
                TopDeals?.length !== 0 &&
                TopDeals.map((item1) => {
                  return (
                    <Deals
                      Id={item1?.fields?.id}
                      image={
                        item1?.fields?.image?.arrayValue?.values[0]?.stringValue
                      }
                      text1={item1?.fields?.text?.stringValue}
                      text2={item1?.fields?.offer?.stringValue}
                      text3={item1?.fields?.description?.stringValue}

                      // {navBar && navBar?.length !== 0 && navBar.map((item1) => {
                      //     return <li>
                      //         <a href={item1?.fields?.slag?.stringValue}>{item1?.fields?.name?.stringValue}</a>
                      //     </li>
                      // })}</ul>
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brand;

import React from "react";
import { useState, useEffect, data } from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Deals from "../../components/Deals/index";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import {
  COLOR,
  DETAIL,
  REVIEW,
  MODELS,
  CARTBUTTON,
} from "../../utils/products";

function Detail() {
  let [searchParams, setSearchParams] = useSearchParams();

  const [detaile, setdetaile] = useState();
  const [detailedata, setdetailedata] = useState({});

  useEffect(() => {
    const DetaileFetch = async () => {
      const idValue = searchParams.get("id");

      const response3 = await axios.post(
        "https://firestore.googleapis.com/v1/projects/e-commerce-90935/databases/(default)/documents:runQuery",

        {
          structuredQuery: {
            from: [
              {
                collectionId: "products",
              },
            ],

            where: {
              compositeFilter: {
                filters: [
                  {
                    fieldFilter: {
                      field: {
                        fieldPath: "id",
                      },
                      op: "EQUAL",
                      value: {
                        stringValue: `${idValue}`,
                      },
                    },
                  },
                ],
                op: "AND",
              },
            },

            // limit: 4,
          },
        }
      );

      const data = response3?.data;
      setdetaile(data?.documents);
      //   setdetailedata(data);

      let updatedData = data.map((a) => {
        return a.document.fields;
      });
      setdetailedata(updatedData);

      // {item1?.fields?.name?.stringValue}
      // console.log({ "**********": data });
    };
    const data1 = DetaileFetch();
  }, []);

  return (
    <div>
      <Header />
      <section class="details-section">
        <div class="container">
          <div class="details-box ">
            <div class="product">
              <div class="top-product">
                <img
                  src=// "/images/detail/product.jpg"
                  {detailedata[0]?.image?.arrayValue?.values[0]?.stringValue}
                />
              </div>
              <div class="bottom">
                {MODELS.map((item3) => {
                  return (
                    <div class="item">
                      <img src={item3.imgmodel} />
                    </div>
                  );
                })}
              </div>

              <div class="reviews">
                <h6>Product Ratings & Reviews</h6>
                <div class="reviews-inner-box">
                  <div class="text">
                    <h3>3.9</h3>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="bar-box">
                    <div class="bar-text">
                      <p>Excellent</p>
                      <p>Very Good</p>
                      <p>Average</p>
                      <p>Poor</p>
                    </div>
                    <div class="bar">
                      <div class="bar-stick-1"></div>
                      <div class="bar-stick-2"></div>
                      <div class="bar-stick-3"></div>
                      <div class="bar-stick-4"></div>
                      <div class="bar-stick-5"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="customer-review-body">
                {REVIEW.map((items2) => {
                  return (
                    <div class="customer-review">
                      <div class="box">
                        <img src={items2.star} />
                        <div class="text">
                          <h6>{items2.titile}</h6>
                        </div>
                      </div>
                      <img src={items2.product} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div class="detail">
              <div class="text">
                <p>
                  ID116 Smart Watch for Womens, Bluetooth Smartwatch Touch
                  Screen Bluetooth Smart Watches for Android iOS Phones Wrist
                  Phone Watch with SIM Card Slot & Camera,Women Men
                </p>
                <h3>₹1,4998</h3>
                <h6>
                  <span> ₹23,99.00 </span>
                  {detailedata[0]?.offer?.stringValue}
                </h6>
              </div>

              <p>Color</p>

              <div class="product-color">
                {COLOR.map((item3) => {
                  return (
                    <div class="item">
                      <img src={item3.imgcolor} />
                    </div>
                  );
                })}
              </div>

              {console.log("searchParams", searchParams.get("id"))}

              {/* {console.log("detaildata", detailedata)} */}

              <div class="barand-details">
                <div class="first-text">
                  <h6>
                    {/* Brand Fossil */}
                    {detailedata[0]?.text?.stringValue}
                  </h6>
                  <p>
                    Model Number FTW4068 Special Feature GPS, Heart Rate Monitor
                    Water Resistance Level Water Resistant Band Colour
                    Multicolor
                  </p>
                </div>
                <div class="second-text">
                  <h6>Product Details</h6>

                  {DETAIL.map((item2) => {
                    return (
                      <ul>
                        <li>{item2.list1}</li>
                      </ul>
                    );
                  })}

                  <div class="forth-text">
                    <p>
                      Usually delivered in 7 days? Enter pincode for exact
                      delivery dates/charges View Details
                    </p>
                  </div>
                </div>

                <div class="buy-cart-buttons">
                  {/* <a href="#" class="hvr-btn">Add to Cart</a>
                                    <a href="#" class=" hvr-btn">Buy Now</a> */}
                  {CARTBUTTON.map((item3) => {
                    return (
                      <a href={item3.url} class="hvr-btn">
                        {item3.text1}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Deals /> */}

      <Footer />
    </div>
  );
}

export default Detail;

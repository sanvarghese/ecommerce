import React from "react";
import { useState } from "react";
import { FOOTER } from '../.././utils/index'

function Foot() {
    return (
        <section class="footer-section">

            <div class="container">
                <div class="footer-body">

                    {FOOTER.map((item2) => {
                        return <div class="company-box"> <h6>{item2.quick}</h6>
                            <ul>
                                <li>
                                    <a href={item2.url1}>{item2.list1}</a>
                                </li>
                                <li>
                                    <a href={item2.url2}>{item2.list2}</a>
                                </li>
                                <li>
                                    <a href={item2.url3}>{item2.list3}</a>
                                </li>
                                <li>
                                    <a href={item2.url4}>{item2.list4}</a>
                                </li>
                            </ul>
                        </div>
                    })}

                    <div class="company-box">
                        <h6>Mail Us:</h6>
                        <ul>
                            <p>
                                Shopindeed Internet Private Limited,
                                Buildings Alyssa, Begonia &
                                Clove Bathery Village,
                                Outer Ring Road Village,
                                Kochy, 560103, Banglure, India
                            </p>

                        </ul>
                    </div>
                </div>
                <div class="copy-right">
                    <hr></hr>
                    <p>
                        © 2007-2022 shopindeed.com
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Foot;

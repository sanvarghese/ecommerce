import React from "react";
import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';

function Banne() {
    return (
        <section class="regular slider">
            <Carousel autoPlay={true}>
                <div className="slide1">
                    <img src="/images/banner1.jpg" />
                    <div className="legend-text">
                        <h1 className="legend-main">Starting 99</h1>
                        <h3 className="legend2">customer most loved home range</h3>
                    </div>
                </div>
                <div className="slide1">
                    <img src="/images/banner1.jpg" />
                    <div className="legend-text">
                        <h1 className="legend-main">Starting 99</h1>
                        <h3 className="legend2">customer most loved home range</h3>
                    </div>
                </div>
                <div className="slide1">
                    <img src="/images/banner1.jpg" />
                    <div className="legend-text">
                        <h1 className="legend-main">Starting 99</h1>
                        <h3 className="legend2">customer most loved home range</h3>
                    </div>
                </div>
            </Carousel>
        </section>
    );
}


export default Banne;

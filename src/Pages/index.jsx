import React from "react";
import { useState } from "react";
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import Banner from '../components/Banner/index'
import Brands from '../components/Brands/index'
import Navebar from '../components/Navebar/index'

// import Deals from '../components/Deals/index'


function Data() {

    return (
        <div>
            <Header />
            <Navebar />
            <Banner />
            <Brands />
            {/* <Deals/> */}
            <Footer />

        </div>
    );
}


export default Data;

import React from "react";
import { useState } from "react";
import Header from '../../components/Header/index'

import Navebar from '../../components/Navebar/index'

import Topdeals from '../../components/Topdeals/index'

import Footer from '../../components/Footer/index'

// import Deals from '../components/Deals/index'



function Top() {


    return (

        <div>
            <Header />
            <Navebar />
            <Topdeals />
            <Footer />
        </div>
    );
}


export default Top;

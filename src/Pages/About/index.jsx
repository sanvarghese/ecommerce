import React from "react";
import { useState } from "react";
import Header from '../../components/Header/index'

import Footer from '../../components/Footer/index'

import Deals from '../../components/Deals/index';

import Navebar from '../../components/Navebar/index'

import { COLOR, DETAIL, REVIEW, MODELS } from "../../utils/products";


// import Deals from '../components/Deals/index'


function About() {


    return (

        <div>
            <Header />
            <Navebar/>
            <div className="sprt">
                <h2>About</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus velit, imperdiet sed leo quis, consequat imperdiet eros. Curabitur eget lorem tristique,
                    rhoncus ligula tincidunt, tempor mi. Nam id ipsum dolor. Nam eleifend fringilla rhoncus. Donec at porttitor sem. Curabitur aliquet nisl ex, ac scelerisque tortor
                    imperdiet finibus. Morbi eros leo, elementum vel sodales nec, fermentum ut magna. Suspendisse ultricies ut quam in ultricies. Nullam arcu nunc, rutrum vitae mauris non,
                    vestibulum varius nulla. Fusce sodales id odio sed interdum. Suspendisse non accumsan felis. Nunc eu tellus nibh. Aliquam pulvinar ipsum in mauris auctor, eget finibus orci
                    viverra. Sed id mattis sapien. Morbi porttitor, sapien vitae suscipit aliquam,
                    elit nibh lobortis metus, vel cursus orci augue at sem. Quisque aliquet pretium dictum.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default About;

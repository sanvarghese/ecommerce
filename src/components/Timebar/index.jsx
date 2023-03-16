

import React from "react"
import { TIMEBAR } from "../../utils/products"


function Subbanner(props) {

    // const [hide, sethide] = useState(true);

    return (
        <>

            {/* {step === 1 && <Step3 step={step} handleSubmit={handleSubmit}/>} */}


            <section class="select-address-section sp-pd-t">
                <div class="sub-bar-box">

                    <div class="sub-bar-inner">

                        <div class="text-item-box">

                            {TIMEBAR.map((item3, index) => {
                                console.log({ index, step: props.step })
                                return <div class="text-item">
                                    <h6>
                                        {item3.text}
                                    </h6>
                                    <img src={props.step > index ? '/images/icons/icon1.png' : '/images/icons/icon2.png'} />
                                </div>
                            })}

                        </div>
                        <hr class="sub-bar-line" />

                    </div>
                </div>
            </section>

        </>
    );
}

export default Subbanner;

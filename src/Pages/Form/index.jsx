import React from "react";

import Step1 from "../Form/Step1/index";
import Step2 from "../Form/Step2/index";
import Step3 from "../Form/Step3/index";
import Step4 from "../Form/Step4/index";
import Step5 from "../Form/Step5/index";
import Step6 from "../Form/Step6/index";
import Step7 from "../Form/Step7/index";



import { useState } from "react";
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import Login from '../../Pages/Form/Step2/index'



function Formsd() {

    const [data, setdata] = useState({ email: ""})

    const [step, setStep] = useState(1);  

    function changedata(e) {
        setdata({ ...data, [e.target.name]: e.target.value });
    }
    
    function handleSubmit(count) {
        console.log(count)
        setStep(count)
    }
    console.log('Formmmmm');


    return (

        <>
            <Header />
            <div>
                {step === 1 && <Step1 Changedata={changedata} Email={data.email} handleSubmit={handleSubmit}/>}
                {step === 2 && <Step3 step={step} handleSubmit={handleSubmit}/>}
                {step === 3 && <Step4 step={step} handleSubmit={handleSubmit}/>}
                {step === 4 && <Step7 step={step} handleSubmit={handleSubmit}/>}
            </div>
            <Footer/>
        </>
    );
}

export default Formsd;

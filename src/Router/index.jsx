import Detail from '../Pages/Detail/index'
import index from '../Pages/index'
// import Topdeals from '../components/Topdeals/index'
// import LOGO from '../components/Header/index'
import About from '../Pages/About/index'
import Career from '../Pages/Career/index'
import Inform from '../Pages/Information/index'
import Contact from '../Pages/Contact/index'

import Topoffer from '../Pages/Topoffer/index'
import Sign from '../Pages/Form/Step1/index'
import Login from '../Pages/Form/Step2/index'
import Addcart from '../Pages/Form/Addcart/index'
import PlaceOrder from '../Pages/Form/Step3/index'
import Credit from '../Pages/Form/Step4/index'
import Upi from '../Pages/Form/Step5/index'
import Cash from '../Pages/Form/Step6/index'
import Complete from '../Pages/Form/Step7/index'
import Mainform from '../Pages/Form/index'
import Authent from '../Pages/Authent/index'



const ROUTER = [
    {
        url: "/",
        component: index,
    },

    {
        url: "/detail",
        component: Detail,
    },
    {
        url: "/collection/*",
        component: Topoffer,
    },

    {
        url: "/about",
        component: About,
    },

    {
        url: "/Career",
        component: Career,
    },
    {
        url: "/Inform",
        component: Inform,
    },

    {
        url: "/Contact",
        component: Contact,
    },

    // {
    //     url: "/",
    //     component: LOGO,
    // },

    // {
    //     url: "/Topdeals",
    //     component: Topdeals,
    // },

    {
        url: "/sign",
        component: Sign,
    },
    {
        url: "/Login",
        component: Login,
    },

    {
        url: "/Cart",
        component: Addcart,
    },

    {
        url: "/Place",
        component: PlaceOrder,
    },
    {
        url: "/Credit",
        component: Credit,
    },

    {
        url: "/Upi",
        component: Upi,
    },

    {
        url: "/Cash",
        component: Cash,
    },

    {
        url: "/Complete",
        component: Complete,
    },

    {
        url: "/Main1",
        component: Mainform,
        
    },

    {
        url: "/Authentication",
        component: Authent,
        
    },

]

export { ROUTER };
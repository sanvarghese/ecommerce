import React from "react";
import { useState, useEffect, data } from "react";
import BrandDeals from "../../utils/products";
import { useNavigate } from "react-router-dom";


// import { createBrowserHistory } from 'history';
 
// export const history = createBrowserHistory();


function Dealson(props) {
  const { Id } = props;
  const [Detaile, setDetaile] = useState();

  const [detailedata, setetailedata] = useState([]);

  const { image, text1, text2, text3 } = props;

  const navigate = useNavigate();

  //    function img_handleclick(){
  //       console.log("its working")
  //   }

  const img_handleclick = (id) => {
    console.log(id);
    navigate(`/detail?id=${id?.stringValue}`);
  };

  {
    console.log("Item1", Id);
  }

  return (
    <div class="item">
      <img src={image} onClick={() => img_handleclick(Id)} />
      <div class="text">
        <p>{text1}</p>
        <p>
          <span>{text2}</span>
        </p>
        <p>{text3}</p>
      </div>
    </div>
  );
}

export default Dealson;

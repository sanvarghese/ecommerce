import React from "react";
import { useState, useEffect, data } from "react";
import { TOPDEALS } from "../../utils/products";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dealson(props) {
  const [Topproduct, setTopproduct] = useState();
  const [Topcategory, setTopcategory] = useState();

  const [categoryData, setCategoryData] = useState({});
  const [productsData, setproductsData] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();
  // setdata({setTopproduct} );

  console.log("local storage", localStorage.getItem("Name"));
  // console.log("section storage", sessionStorage.getItem2("item_key"));

  const navigate = useNavigate();

  const img_handleclick = (id) => {
    navigate(`/detail?id=${id}`);
  };

  useEffect(() => {
    const productFetch = async () => {
      const idValue = searchParams.get("id");

      const response = await axios.post(
        "https://firestore.googleapis.com/v1/projects/e-commerce-90935/databases/(default)/documents:runQuery",

        {
          structuredQuery: {
            from: [
              {
                collectionId: "categories",
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

            limit: 4,
          },
        }
      );

      const data = response?.data[0];
      setCategoryData(data);
      setTopproduct(data?.documents);
    };
    const data1 = productFetch();
  }, []);

  useEffect(() => {
    const products2Fetch = async () => {
      const idValue = searchParams.get("id");

      const response2 = await axios.post(
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
                        fieldPath: "category",
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
          },
        }
      );
      
      const data = response2?.data;
      let updatedData = data.map((a) => {
        return a.document.fields;
      });
      setproductsData(updatedData);
    };

    const data1 = products2Fetch();
  }, []);

  return (
    <section class="brand-section sprt">
      <div class="container">
        {console.log("searchParams", searchParams.get("id"))}
        <div class="brand-box">
          <div class="brand-text">
            <h3>{categoryData?.document?.fields?.name?.stringValue}</h3>
          </div>
          {console.log("Topcategory", Topcategory)}
          <div class="item-box">
            {productsData &&
              productsData?.length !== 0 &&
              productsData?.map((itemd1) => {
                return (
                  <div class="item">
                    <img
                      src={itemd1?.image?.arrayValue?.values[0]?.stringValue}
                      onClick={() => img_handleclick(itemd1?.id?.stringValue)}
                    />
                    <div class="text">
                      <p>{itemd1?.text?.stringValue}</p>

                      <p>
                        <span>{itemd1?.offer?.stringValue}</span>
                      </p>
                      <p>{itemd1?.description?.stringValue}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dealson;

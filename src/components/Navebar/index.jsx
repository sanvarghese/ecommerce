// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, serializeFormQuery } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAVEBAR } from "../../utils/index";
import { useSearchParams } from "react-router-dom";

function Nave() {
  const [navBar, setNaveBar] = useState();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const navbarFetch = async () => {
      const response = await fetch(
        `https://firestore.googleapis.com/v1/projects/e-commerce-90935/databases/(default)/documents/categories`
      );
      const data = await response.json();
      setNaveBar(data?.documents);
      // {item1?.fields?.name?.stringValue}
    };
    navbarFetch();
  }, []);

  // function handleSubmit(event) {
  //     event.preventDefault();
  //     let params = serializeFormQuery(event.target);
  //     setSearchParams(params);
  //   }

  return (
    <div class="bottom-nav-body">
      <div class="bottom-nav">
        {console.log({ navBar })}
        <div class="menu">
          <ul>
            {navBar &&
              navBar?.length !== 0 &&
              navBar.map((item1) => {
                return (
                  <li>
                    {console.log("item1?.fields", item1?.fields)}
                    <a
                      href={`/collection/${item1?.fields?.slag?.stringValue}?id=${item1?.fields?.id?.stringValue}`}
                    >
                      {item1?.fields?.name?.stringValue}
                    </a>
                    {/* <a href="/collection/{item1?.fields?.slag?.stringValue}?id={item1?.fields?.id?.stringValue}">{item1?.fields?.name?.stringValue}</a> */}
                  </li>
                );
              })}
          </ul>

          {/* {item1?.fields?.slag?.stringValue} */}

          {/* <ul>
                        {NAVEBAR.map((item1) => {
                            // { console.log({ item1 }); }
                            return <li>
                                <a href={item1.url}>{item1.path}</a>
                            </li>
                        })}</ul> */}
        </div>
        <div class="gtoggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Nave;

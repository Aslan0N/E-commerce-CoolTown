import React, { useContext, useState } from "react";
import ProductsCard from "./ProductsCard";
import { BiSearch } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import MyData from "../../../Data/ProductsData.json";
import { GlobalContext } from "../../../Context/GlobalContext";

const FilterPanel = () => {
  const [click, setClick] = useState(false);
  const toggleClick = () => {
    setClick(!click);
  };

  // Translation
  const { t } = useTranslation();

  // Category Filter

  const allCategory = [
    "All",
    "National Ice Cream Month",
    "Baked Alaska",
    "Bambino (ice-cream)",
    "Bob ice cream bar",
    "Creme de papaya",
    "Ice cream barge",
  ];

  const filterCat = (value) => {
    if (value === "All") {
      setMyData(MyData);
      return;
    }
    let catList = MyData.filter((category) => {
      return category.category === value;
    });
    setMyData(catList);
  };

  console.log(Boolean(""));

  // Filter Price
  const allPrice = [
    "$10 - $20",
    "$20 - $30",
    "$30 - $40",
    "$40 - $50",
    "$50 - $60",
    "$60 - $70",
    "$70 - $80",
  ];

  // Filter Brand

  const allBrand = [
    "Kwality Walls",
    "Arun Ice Creams",
    "Naturals Ice Cream",
    "Boba ice cream bar",
    "Mother Dairy",
    "Top’ N Town",
  ];

  const filterBrand = (brand) => {
    const brandList = MyData.filter((item) => {
      return item.brand === brand;
    });
    setMyData(brandList);
  };

  // SearchBox
  const { myData, setMyData } = useContext(GlobalContext);
  const searchProd = (value) => {
    console.log(value);
    const result = MyData.filter((item) => {
      return item.title.toLowerCase().includes(value);
    });
    setMyData(result);
  };

  const handleChange = (value) => {
    searchProd(value);
  };
  return (
    <>
      <section id="filter">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9">
              <ProductsCard />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 panel">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="search-box">
                  <h4 className="h4">{t("filter.1")}</h4>
                  <div className="search">
                    <input
                      type="text"
                      onChange={(e) => handleChange(e.target.value)}
                      placeholder={t("filter.1")}
                    />
                    <BiSearch className="i" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel-border">
                  <h4 className="h4">{t("filter.2")}</h4>
                  <ul>
                    {allCategory.map((item, index) => {
                      return (
                        <li key={index} onClick={() => filterCat(item)}>
                          <label>
                            <input type="radio" name="category" id="" />{" "}
                            <span
                              onClick={toggleClick}
                              className="span"
                              type="button"
                            ></span>{" "}
                            <p>{item}</p>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel-border">
                  <h4 className="h4">{t("filter.3")}</h4>
                  <ul>
                    {allPrice.map((item, index) => {
                      return (
                        <li key={index}>
                          {" "}
                          <label>
                            <input type="radio" name="price" id="" />
                            <span className="span"></span> <p>{item}</p>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel-border">
                  <h4 className="h4">{t("filter.4")}</h4>
                  <ul>
                    {allBrand.map((brand, index) => {
                      return (
                        <li key={index} onClick={() => filterBrand(brand)}>
                          <label>
                            <input type="radio" name="brand" id="" />
                            <span className="span"></span> <p>{brand}</p>
                          </label>{" "}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="img-card">
                  <img
                    src="https://webstrot.com/html/cooltown/html/images/add1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterPanel;

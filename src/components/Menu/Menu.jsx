import React, { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import "./Menu.scss";
import MenuCard from "./MenuCard";

const Menu = () => {
  const { getProduct, product } = useProductContext();
  useEffect(() => {
    getProduct();
  }, []);
  return product.length === 0 ? (
    <h1
      style={{
        fontSize: "60px",
        backgroundColor: "red",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        gap: "20px",
      }}
    >
      card is not{" "}
      <img
        style={{ width: "100px" }}
        src="https://assets-global.website-files.com/646218c67da47160c64a84d5/6463461e80a208f3afa59355_54.png"
        alt=""
      />
    </h1>
  ) : (
    <div id="menu">
      <div className="container">
        <div className="menu">
          {product.map((el) => (
            <MenuCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;

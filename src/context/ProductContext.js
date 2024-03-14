import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProductContext = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const API = "http://localhost:3000/product";
  const [product, setProduct] = useState([]);
  const [oneProduct, setOneProduct] = useState({});

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
    getProduct();
  }

  async function getProduct() {
    const { data } = await axios.get(API);
    setProduct(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProduct();
  }

  async function getOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    setOneProduct(data);
  }

  async function saveEditProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProduct();
  }

  let values = {
    addProduct,
    getProduct,
    product,
    deleteProduct,
    getOneProduct,
    oneProduct,
    saveEditProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;

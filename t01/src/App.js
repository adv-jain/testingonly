import { useState } from "react";
import Header from "./components/Header.js";
// import Cart from "./components/Cart.js";
import Product from "./components/Product.js";
import Box from "./components/Box.js";

export default function App() {
  let { product, setProduct } = useState([]);

  // product = [
  //   {
  //     id: 1,
  //     title: "Product 1",
  //     price: 100,
  //   },
  //   {
  //     id: 2,
  //     title: "Product 2",
  //     price: 200,
  //   },
  //   {
  //     id: 3,
  //     title: "Product 3",
  //     price: 300,
  //   },
  //   {
  //     id: 3,
  //     title: "Product 3",
  //     price: 300,
  //   },
  //   {
  //     id: 3,
  //     title: "Product 3",
  //     price: 300,
  //   },
  //   {
  //     id: 3,
  //     title: "Product 3",
  //     price: 300,
  //   },
  // ];

  let themeColor = null;
  let x = 1;

  return (
    <>
      <Header />
      <div
        className="container my-5"
        style={
          themeColor
            ? { backgroundColor: themeColor }
            : { backgroundColor: "white" }
        }
      >
        <Product product={product} setProduct={setProduct} />

        <Box y={x} customCSS="mt-5 bg-warning p-4 rounded" />
        <Box customCSS="mt-5 bg-danger p-4 rounded" />
        <Box customCSS="mt-5 bg-success p-4 rounded" />
      </div>
    </>
  );
}

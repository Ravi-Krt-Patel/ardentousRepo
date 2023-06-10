import "./styles.css";
import axios from "axios";
import { Product } from "./components/Product";
import { useState, useEffect } from "react";
import { AddData } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { UpdateProduct } from "./components/UpdateProduct";
import { AddProduct } from "./components/AddProduct";
import { Link } from "react-router-dom";
export default function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ListReducer);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then(({ data }) => {
      dispatch(AddData(data.products));
    });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Link to="/addProduct">
              <h2>Add New Product</h2>
            </Link>
            {data.allData &&
              data.allData.map((item, ind) => (
                <Product key={item.id} data={item} ind={ind} />
              ))}
          </div>
        }
      />
      <Route path="/update" element={<UpdateProduct />} />
      <Route path="/addProduct" element={<AddProduct />} />
    </Routes>
  );
}

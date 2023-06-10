import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddProductData } from "../../Redux/Action";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <>
      <Link to="/">Home page</Link>
      <br />
      <br />
      <p>Id</p>
      <input
        value={id}
        type="number"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />

      <p>title</p>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <p>Description</p>
      <input
        type="text"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          const data = {
            id: id,
            title: title,
            description: desc
          };
          dispatch(AddProductData(data));
          navigate("/");
        }}
      >
        Add Product
      </button>
    </>
  );
};

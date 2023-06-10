import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UpdateProductData } from "../../Redux/Action";
import { useNavigate } from "react-router-dom";
export const UpdateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.UpdateReducer);

  const [titel, setTilte] = useState(Data.data.title);
  const [desc, setDesc] = useState(Data.data.description);

  const handleTitle = (e) => {
    setTilte(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  // id: 1
  // title: "iPhone 9"
  // description: "An apple mobile which is nothing like apple"
  // price: 549
  // discountPercentage: 12.96
  // rating: 4.69
  // stock:

  return (
    <>
      <Link to="/">Home</Link>
      <p>Title</p>
      <input value={titel} onChange={handleTitle} />
      <p>Description</p>
      <input value={desc} onChange={handleDesc} />
      <br />
      <br />
      <button
        onClick={() => {
          const updatedata = {
            title: titel,
            description: desc
          };
          dispatch(UpdateProductData(Data.data.id, updatedata));
          // console.log(titel,desc)
          navigate("/");
        }}
      >
        Update
      </button>
    </>
  );
};

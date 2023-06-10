import { useDispatch } from "react-redux";
import { DeletProduct, UpdateProduct } from "../../Redux/Action";
import { Link } from "react-router-dom";

export const Product = (prop) => {
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "20px" }}>
      <h1>{prop.data.title}</h1>
      <h5>{prop.data.description}</h5>
      <p>Price: {prop.data.price}</p>
      <button
        onClick={() => {
          dispatch(DeletProduct(prop.data));
        }}
      >
        delete
      </button>
      <Link to="/update">
        <button
          onClick={() => {
            dispatch(UpdateProduct(prop.data));
          }}
        >
          update
        </button>
      </Link>
    </div>
  );
};

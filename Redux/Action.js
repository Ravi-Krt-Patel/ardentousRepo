export const AddData = (payload) => ({
  type: "AddData",
  payload
});

export const DeletProduct = (payload) => ({
  type: "DeleteProduct",
  payload
});

export const UpdateProduct = (payload) => ({
  type: "UpdateProduct",
  payload
});

export const UpdateProductData = (itemId, updatedData) => ({
  type: "UpdateProductData",
  payload: { itemId, updatedData }
});

export const AddProductData = (payload) => {
  return {
    type: "AddProductData",
    payload
  };
};

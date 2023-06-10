const initialData = {
  allData: [],
  loading: false
};

export const ListReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case "AddData":
      return { ...state, loading: false, allData: payload };
    case "DeleteProduct":
      return {
        ...state,
        allData: state.allData.filter((item) => item.id !== payload.id)
      };
    case "UpdateProductData":
      const { itemId, updatedData } = payload;
      const updateItems = state.allData.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            ...updatedData
          };
        }
        return item;
      });
      return { ...state, allData: updateItems };
    case "AddProductData":
      const updatedItems = [...state.allData, payload];
      return {
        ...state,
        allData: updatedItems
      };
    default:
      return state;
  }
};

const init2 = {
  data: []
};

export const UpdateReducer = (state = init2, { type, payload }) => {
  switch (type) {
    case "UpdateProduct":
      return { ...state, data: payload };
    default:
      return state;
  }
};

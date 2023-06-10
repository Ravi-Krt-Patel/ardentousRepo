import { createStore, combineReducers } from "redux";
import { ListReducer, UpdateReducer } from "./ItemReducer";

const rootReducer = combineReducers({
  ListReducer,
  UpdateReducer
});

export const store = createStore(rootReducer);

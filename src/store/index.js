import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import recordReducer from "./record";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    record: recordReducer,
  },
});

export default store;

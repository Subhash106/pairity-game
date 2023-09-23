import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import recordReducer from "./record";
import accountReducer from "./account";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    record: recordReducer,
    account: accountReducer,
  },
});

export default store;

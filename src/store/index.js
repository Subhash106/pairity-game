import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "./record";
import accountReducer from "./account";

const store = configureStore({
  reducer: {
    record: recordReducer,
    account: accountReducer,
  },
});

export default store;

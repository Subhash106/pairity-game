import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./game";
import recordReducer from "./record";
import accountReducer from "./account";

const store = configureStore({
  reducer: {
    game: gameReducer,
    record: recordReducer,
    account: accountReducer,
  },
});

export default store;

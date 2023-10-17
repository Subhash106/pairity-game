import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./game";
import recordReducer from "./record";
import accountReducer from "./account";
import { loadState, saveState } from "../utils/localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    game: gameReducer,
    record: recordReducer,
    account: accountReducer,
    persistedState,
  },
});

store.subscribe(() => {
  saveState({ game: store.getState().game });
});

export default store;

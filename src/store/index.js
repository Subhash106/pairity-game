import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import recordReducer from "./record";
<<<<<<< HEAD
import accountReducer from "./account";
=======
>>>>>>> 3abb733873231c5e39192099e700d149f6295291

const store = configureStore({
  reducer: {
    modal: modalReducer,
    record: recordReducer,
<<<<<<< HEAD
    account: accountReducer,
=======
>>>>>>> 3abb733873231c5e39192099e700d149f6295291
  },
});

export default store;

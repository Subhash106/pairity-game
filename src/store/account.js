import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 100,
  id: 123456,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAccount } = accountSlice;

export default accountSlice.reducer;

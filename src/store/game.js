import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 4,
  title: "Safe-Parity",
  backgroundColor: "#219C90",
  timeDuration: "3mins",
  durationInSeconds: 180,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, action) => {
      return action.payload;
    },
  },
});

export const { setGame } = gameSlice.actions;

export default gameSlice.reducer;

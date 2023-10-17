import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../utils/localStorage";

const initialState = loadState().game;

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, action) => {
      return action.payload;
    },
    updateGame: (state, action) => {
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    },
  },
});

export const { setGame, updateGame } = gameSlice.actions;

export default gameSlice.reducer;

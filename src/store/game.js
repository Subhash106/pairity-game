import { createSlice } from "@reduxjs/toolkit";
import getDiffCount from "../utils/getDiffCount";

const { diffSecondsCount } = getDiffCount(180);

const initialState = {
  id: "game4",
  title: "Safe-Parity",
  backgroundColor: "#219C90",
  timeDuration: "3mins",
  durationInSeconds: 180,
  diffSecondsCount,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, action) => {
      return action.payload;
    },
    updateGame: (state, action) => {
      return { ...state, [action.key]: action.value };
    },
  },
});

export const { setGame, updateGame } = gameSlice.actions;

export default gameSlice.reducer;

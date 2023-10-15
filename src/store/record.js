import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  records: {
    game1: [
      {
        id: 1,
        number: 1,
        color: "#bb2525",
      },
      {
        id: 2,
        number: 2,
        color: "#793fdf",
      },
      {
        id: 3,
        number: "?",
        color: "#98eecc",
      },
      {
        id: 4,
        number: 1,
        color: "#bb2525",
      },
    ],
    game2: [
      {
        id: 5,
        number: 1,
        color: "#bb2525",
      },
      {
        id: 6,
        number: 2,
        color: "#793fdf",
      },
      {
        id: 7,
        number: 1,
        color: "#bb2525",
      },
      {
        id: 8,
        number: 2,
        color: "#793fdf",
      },
    ],
    game3: [
      {
        id: 9,
        number: "?",
        color: "#98eecc",
      },
      {
        id: 10,
        number: 1,
        color: "#bb2525",
      },
      {
        id: 11,
        number: 2,
        color: "#793fdf",
      },
      {
        id: 12,
        number: "5",
        color: ["#98eecc", "#793fdf"],
      },
    ],
    game4: [
      {
        id: 13,
        number: 1,
        color: "#bb2525",
      },
      {
        id: 14,
        number: 1,
        color: "#bb2525",
      },
      {
        id: 15,
        number: 2,
        color: "#793fdf",
      },
      {
        id: 16,
        number: 1,
        color: "#bb2525",
      },
      {
        id: 17,
        number: 2,
        color: "#793fdf",
      },
      {
        id: 18,
        number: "?",
        color: "#98eecc",
      },
    ],
  },
};

const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    setRecordForGame: (state, action) => {
      const {
        payload: { gameId, data },
      } = action;

      return {
        ...state,
        records: {
          ...state.records,
          [gameId]: data,
        },
      };
    },
    setRecord: (state, action) => {
      const {
        payload: { gameId, data },
      } = action;

      return {
        ...state,
        records: {
          ...state.records,
          [gameId]: state.records[gameId].concat([data]),
        },
      };
    },
  },
});

export const { setRecord, setRecordForGame } = recordSlice.actions;

export default recordSlice.reducer;

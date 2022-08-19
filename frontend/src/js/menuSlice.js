import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    item: [],
    status: null,
  },
];

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {

  }
});

export default menuSlice.reducer
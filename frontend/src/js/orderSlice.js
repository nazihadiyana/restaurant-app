import { createSlice } from "react-redux";

const initialState = {
  orderItems: [],
  orderTotalQuality: 0,
  orderTotalAmount: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orderItems.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer
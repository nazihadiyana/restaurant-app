import * as actionTypes from "./ordertype";

const INITIAL_ORDER = {
  food: [],
  order: [],
  currentItem: null,
};

const orderReducer = (state = INITIAL_ORDER, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_ORDER:
      return {};
    case actionTypes.REMOVE_FROM_ORDER:
      return {};
    case actionTypes.ADJUST_QUANTITY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default orderReducer;

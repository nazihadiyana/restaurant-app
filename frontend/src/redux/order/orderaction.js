import * as actionTypes from "./ordertype";

export const addToOrder = (itemID) => {
  return {
    type: actionTypes.ADD_TO_ORDER,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromOrder = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_ORDER,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQuantity = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      id: itemID,
      quantity: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

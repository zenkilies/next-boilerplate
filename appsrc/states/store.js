import {createStore} from "redux";

import {actionTypes} from "./actions";

const initialState = {
  isRouting: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ROUTING:
      return Object.assign({}, state, {
        isRouting: !state.isRouting,
      });
    default:
      return state;
  }
};

export function initializeStore(initialState = initialState) {
  return createStore(
    reducer,
    initialState,
  );
}

export const actionTypes = {
  TOGGLE_ROUTING: "TOGGLE_ROUTING",
};

export const toggleRouting = function () {
  return {
    type: actionTypes.TOGGLE_ROUTING,
  };
};

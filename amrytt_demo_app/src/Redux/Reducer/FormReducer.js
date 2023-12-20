const initialState = [];

export const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setFormData":
      return [...action.payload];
    default:
      return state;
  }
};
